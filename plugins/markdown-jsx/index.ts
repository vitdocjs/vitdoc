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

      const modules = fromMarkdown(content)
        .children.filter(
          ({ type, lang = "" }) =>
            type === "code" && (isJsx(<string>lang) || isCSSLang(<string>lang))
        )
        .map((item, index) => {
          const content = <string>item.value || "";
          const lang = item.lang;
          const fileName = `${index}.${lang}`;

          markdownMap[fileName] = content;

          let moduleID = addUrlParams(id, `markdown-proxy&index=${fileName}`);
          if (server) {
            const { lastHMRTimestamp } =
              server.moduleGraph.getModuleById(id) || {};

            moduleID = moduleID.replace(
              "?markdown-proxy",
              `?t=${lastHMRTimestamp}&markdown-proxy`
            );
          }

          const code = `import renderDom from '${moduleID}'; (typeof renderDom === 'function') && renderDom();`;

          return {
            lang,
            code,
            sourcesContent: content,
          };
        });

      const hash = getAssetHash(
        modules.reduce(
          (previousValue, currentValue) =>
            previousValue.concat(currentValue.code),
          ""
        )
      );

      return {
        code: `export default ${JSON.stringify({ hash, content, modules })}`,
      };
    },
  };
};
export default mdjsx;
