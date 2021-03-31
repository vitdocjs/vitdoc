import fs from "fs";
import fromMarkdown from "mdast-util-from-markdown";
import {
  addUrlParams,
  cleanUrl,
  getAssetHash,
  invalidate,
  resolveMainComponent,
} from "../utils";
import type { ModuleNode, ViteDevServer } from "vite";
import { isCSSLang, isJsx } from "../utils/lang";
import { send } from "vite/dist/node";

const mdProxyRE = /\?(t=\d+&)?markdown-proxy&index=(\d+)\.(\w+)$/;

export const isMarkdownProxy = (id) => mdProxyRE.test(id);

const mdjsx = () => {
  let markdownMap = {};
  let server: ViteDevServer;
  const cwd = process.cwd();
  let resolver;
  return {
    name: "vite:markdown-jsx",
    handleHotUpdate(ctx) {
      const { file, timestamp } = ctx;

      if (/\.md$/.test(file)) {
        markdownMap = {};
        const mod = ctx.server.moduleGraph.getModuleById(file);

        mod &&
          [mod].forEach((payload) => {
            payload.importedModules.forEach((val) => {
              invalidate(val, timestamp, new Set<ModuleNode>());
            });
          });
      }
    },
    configureServer(_server) {
      const { middlewares, moduleGraph, transformRequest } = _server;
      server = _server;

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          (req.headers.accept || "").includes("text/html")
        ) {
          return next();
        }

        if (!isMarkdownProxy(req.url)) {
          return next();
        }

        try {
          const result = await transformRequest(req.url);
          const readmeMod = await moduleGraph.getModuleById(cleanUrl(req.url));
          const mod = await moduleGraph.getModuleByUrl(req.url);

          readmeMod.importedModules.add(mod);
          await moduleGraph.updateModuleInfo(
            readmeMod,
            readmeMod.importedModules,
            new Set(),
            false
          );
          return send(req, res, result.code, "js");
        } catch (e) {
          res.end();
        }
      });
    },
    configResolved(resolvedConfig) {
      // store the resolved config
      resolver = resolvedConfig.createResolver({ asSrc: false });
    },

    async resolveId(id) {
      if (/\.md/.test(id)) {
        return id;
      }
    },
    async load(id) {
      if (isMarkdownProxy(id)) {
        const [, , fileIndex, lang] = id.match(mdProxyRE) || [];
        const code = markdownMap[`${fileIndex}.${lang}`];
        if (!code) {
          return "";
        }
        if (!isJsx(lang)) {
          return code;
        }
        const index = code.indexOf("ReactDOM.render");
        const before = code.slice(0, index);
        const after = code.slice(index);

        const mainModule = await resolveMainComponent(
          // @ts-ignore
          { pluginContainer: { resolveId: this.resolve } },
          id
        );

        const nextCode = `${before.replace("import React ", "import React$ ")}
      
      ${
        mainModule
          ? `import $_Component from '${mainModule.id}';`
          : `const $_Component = {};`
      }
      const React = {...React$};

      const beforeCreateElement = React.createElement;
      React.createElement = (Comp,...rest) => {
        const wrap = window.$_ComponentWrap;
        let NextComp = Comp;

        if(NextComp === $_Component && wrap) {
          NextComp = wrap(Comp, { React: React$ });
        }

        return beforeCreateElement(NextComp, ...rest);
      };
      export default function (){;${after};}`;

        return nextCode;
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      const content = fs.readFileSync(id, "utf-8");

      let moduleIds = {};
      const promises = fromMarkdown(content)
        .children.filter(
          ({ type, lang = "" }) =>
            type === "code" && (isJsx(<string>lang) || isCSSLang(<string>lang))
        )
        .map(async (item, index) => {
          const content = <string>item.value || "";
          const lang = item.lang;
          const fileName = `${index}.${lang}`;

          markdownMap[fileName] = content;

          const params = `markdown-proxy&index=${fileName}`;
          // id = id.replace(cwd + "/", "");
          let moduleID = addUrlParams(id, params);
          if (server) {
            const { lastHMRTimestamp } =
              server.moduleGraph.getModuleById(id) || {};

            moduleID = moduleID.replace(
              "?markdown-proxy",
              `?t=${lastHMRTimestamp}&markdown-proxy`
            );
          }

          this.emitFile({
            type: "chunk",
            id: moduleID,
            importer: id,
          });

          moduleIds[index] = moduleID;

          return {
            lang,
            sourcesContent: content,
          };
        });

      const modules = await Promise.all(promises);

      const hash = getAssetHash(content);

      return {
        code: `
        const modules = {
          ${Object.entries(moduleIds).reduce(
            (prev, [k, v]) =>
              prev.concat(`${k}: () => { 
                import('${v}').then(res => { 
                  const fn = res.default;
                  typeof fn === 'function' && fn();
                });
              },`),
            ""
          )}
        }

        const exportModules = ${JSON.stringify({
          hash,
          content,
          modules,
        })}
  
        exportModules.modules.forEach((item,index)=>{
          item.load = modules[index];
        })
        
        export default exportModules; `,
      };
    },
  };
};
export default mdjsx;
