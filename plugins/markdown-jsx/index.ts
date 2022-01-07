import fs from "fs";
import fromMarkdown from "mdast-util-from-markdown";

import {
  addUrlParams,
  cleanUrl,
  getAssetHash,
  removeImportQuery,
  removeProcessCwd,
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
          // const mod = await moduleGraph.getModuleByUrl(url);

          // readmeMod &&
          await moduleGraph.updateModuleInfo(
            readmeMod,
            new Set([...Array.from(readmeMod.importedModules), url]),
            new Set(),
            true
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
      const file = cleanUrl(id);
      if (isMarkdownProxy(id)) {
        id = removeProcessCwd(id);

        const [, fileIndex, lang] = id.match(mdProxyRE) || [];

        const code = markdownMap[`${file}_${fileIndex}.${lang}`];
        if (!code) {
          return "";
        }

        if (!isJsx(lang)) {
          return code;
        }

        const mainModuleId = await resolveMainComponent(
          // @ts-ignore
          { pluginContainer: { resolveId: this.resolve } },
          id
        ).then((res) => (res ? res.id : ""));

        const replaceReact = (code) => {
          const matchInfo = code.match(/import React([ ,])?.+?;/);
          const { index: matchedIndex, "0": matchedContent } = matchInfo;
          const index = matchedIndex + matchedContent.length;
          const before = code.slice(0, index);
          const after = code.slice(index);

          const reactCode = before.replace(
            /import React([ ,])?/,
            (d, matchInfo) => {
              return `import React$${matchInfo}`;
            }
          );

          return `${reactCode}
      ${
        mainModuleId
          ? `import $_Component from '${mainModuleId}';`
          : `const $_Component = {};`
      }
      const React = {...React$};

      const beforeCreateElement = React.createElement;
      var $_ComponentWrap;
      React.createElement = (Comp,...rest) => {
        const wrap = $_ComponentWrap;
        let NextComp = Comp;

        if(NextComp === $_Component && wrap) {
          NextComp = wrap(Comp, { React: React$ });
        }

        return beforeCreateElement(NextComp, ...rest);
      };
      
      ${after}
      `;
        };

        const replaceExport = (code) => {
          const reg = /import .+ from .+;/g;

          let regRes: RegExpExecArray | null;
          let lastReg: RegExpExecArray | null;
          while ((regRes = reg.exec(code))) {
            lastReg = regRes;
          }

          if (!lastReg!) {
            return code;
          }
          const lastIndex: number = lastReg.index + lastReg[0].length;

          return `${code.slice(
            0,
            lastIndex
          )};export default function(mountNode, ComponentWrap){$_ComponentWrap = ComponentWrap;${code.slice(
            lastIndex
          )};};`;
        };

        let nextCode: string = replaceReact(code);

        nextCode = replaceExport(nextCode);
        // nextCode = addHMR(nextCode);

        return nextCode;
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      const content = fs.readFileSync(id, "utf-8");

      let moduleIds = {};
      const promises = (fromMarkdown(content) as any).children
        .filter(
          ({ type, lang = "" }) =>
            type === "code" && (isJsx(<string>lang) || isCSSLang(<string>lang))
        )
        .map(async (item, index) => {
          const content = <string>item.value || "";
          const lang = item.lang;
          const fileName = `${index}.${lang}`;

          markdownMap[`${file}_${fileName}`] = content;

          const params = `markdown-proxy&index=${fileName}`;
          // id = id.replace(cwd + "/", "");
          let moduleID = addUrlParams(id, params);

          isBuild &&
            this.emitFile({
              type: "chunk",
              id: moduleID,
              importer: id,
            });

          moduleIds[index] = removeProcessCwd(moduleID);

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
              prev.concat(`${k}: function () { 
                let pathId = '${v}';
                const isCss = ${/\.(css|less|sass|scss|styl|stylus|postcss)$/.test(`${v}`)};
                
                import('${v}').then(res => { 
                  const fn = res.default;
                  typeof fn === 'function' && fn.apply(null, arguments); 
                  isCss && arguments[0] && arguments[0](pathId, fn);
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
        
        export default exportModules;
        `,
      };
    },
  };
};
export default mdjsx;
