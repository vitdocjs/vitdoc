import fs from "fs";
import fromMarkdown from "mdast-util-from-markdown";
import {
  addUrlParams,
  cleanUrl,
  getAssetHash,
  removeImportQuery,
  resolveMainComponent,
} from "../utils";
import { isCSSLang, isJsx } from "../utils/lang";
import { send } from "vite/dist/node";

const mdProxyRE = /markdown-proxy&index=(\d+)\.(\w+)$/;

export const isMarkdownProxy = (id) => mdProxyRE.test(id);

const mdjsx = () => {
  let markdownMap = {};
  let isBuild: boolean;
  return {
    name: "vite:markdown-jsx",
    config(resolvedConfig, { command }) {
      // store the resolved config
      isBuild = command === "build";
    },

    handleHotUpdate(ctx) {
      const { file, modules } = ctx;

      if (/\.md$/.test(file)) {
        markdownMap = {};
        const mod = ctx.server.moduleGraph.getModuleById(file);

        if (mod) {
          mod.isSelfAccepting = true;
          return modules.filter(
            (cmod) => mod.importedModules.has(cmod) || modules === cmod
          );
        }
      }
    },
    configureServer(_server) {
      const { middlewares, moduleGraph, transformRequest } = _server;

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
          const url = removeImportQuery(req.url);
          const result = await transformRequest(url);
          const readmeMod = await moduleGraph.getModuleByUrl(cleanUrl(url));
          const mod = await moduleGraph.getModuleByUrl(url);

          readmeMod.importedModules.add(mod);
          await moduleGraph.updateModuleInfo(
            readmeMod,
            readmeMod.importedModules,
            new Set(),
            false
          );
          return send(req, res, result.code, "js");
        } catch (e) {
          console.error(e);
          res.end();
        }
      });
    },

    async resolveId(id) {
      if (/\.md/.test(id)) {
        return id;
      }
    },
    async load(id) {
      if (isMarkdownProxy(id)) {
        const [, fileIndex, lang] = id.match(mdProxyRE) || [];

        const code = markdownMap[`${fileIndex}.${lang}`];
        if (!code) {
          return "";
        }
        if (!isJsx(lang)) {
          return code;
        }
        const matchInfo = code.match(/import React([ ,])?.+?;/);
        const { index: matchedIndex, "0": matchedContent } = matchInfo;
        const index = matchedIndex + matchedContent.length;
        const before = code.slice(0, index);
        const after = code.slice(index);

        const mainModule = await resolveMainComponent(
          // @ts-ignore
          { pluginContainer: { resolveId: this.resolve } },
          id
        );

        const nextCode = `${before.replace(
          /import React([ ,])?/,
          (d, matchInfo) => {
            return `import React$${matchInfo}`;
          }
        )}
      
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
      ;${after};
      `;

        return nextCode;
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      const content = fs.readFileSync(id, "utf-8");

      let moduleIds = {};
      const promises = (fromMarkdown(content) as any)
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

          isBuild &&
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
