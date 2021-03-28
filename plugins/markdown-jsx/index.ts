// @ts-ignore
import * as path from "path";
import fs from "fs";
import fromMarkdown from "mdast-util-from-markdown";
import {
  cleanUrl,
  fsExist,
  getImporter,
  isCSSRequest,
  isHTMLProxy,
} from "../utils";
import { send } from "vite";
import get from "lodash/get";

const mdjsx = () => {
  const markdownMap = {};
  return {
    name: "vite:markdown-jsx",
    handleHotUpdate({ file, modules, server }) {
      if (isCSSRequest(file)) {
        return;
      }

      modules.forEach(async (payload) => {
        const importer = getImporter(payload);
        const url = cleanUrl(get(importer, "url", ""));

        if (url) {
          const mod = await server.moduleGraph.getModuleByUrl(
            path.resolve(url, "../index")
          );
          console.log(path.resolve(url, "./index"), mod);
          mod.isSelfAccepting = true;
          payload.isSelfAccepting = true;
          setTimeout(() => {
            mod.isSelfAccepting = false;
            payload.isSelfAccepting = false;
          });

          server.ws.send({
            type: "custom",
            event: "packages-update",
            data: { url, t: new Date().valueOf() },
          });
        }
      });

      return [];
    },
    configureServer(server) {
      const { middlewares, pluginContainer, moduleGraph } = server;

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          isHTMLProxy(req.url)
          //  || req.headers.accept?.includes("text/html")
        ) {
          return next();
        }

        const url = cleanUrl(req.url);

        if (!/\.md$/.test(url)) {
          return next();
        }

        const filePath = path.resolve(process.cwd(), "./" + url);
        const exist = fsExist(filePath);

        if (!exist) {
          return next();
        }

        const content = fs.readFileSync(filePath, "utf-8");

        const readmeMod = await moduleGraph.ensureEntryFromUrl(url);

        const tasks = fromMarkdown(content)
          .children.filter(
            ({ type, lang = "" }) =>
              type === "code" && /^[t|j]sx$/.test(<string>lang)
          )
          .map(async (item, index) => {
            const content = <string>item.value || "";

            const modPath = `${filePath}.[${index}].${item.lang}`;
            markdownMap[modPath] = content;

            const mod = await moduleGraph.ensureEntryFromUrl(modPath);
            mod.isSelfAccepting = true;
            readmeMod.importedModules.add(mod);
            await moduleGraph.updateModuleInfo(
              readmeMod,
              readmeMod.importedModules,
              new Set(),
              false
            );

            return {
              code: await pluginContainer
                .transform(content, modPath)
                .then(({ code }) => code),
              // .catch(() => Promise.resolve("")),
              sourcesContent: content,
            };
          });

        const modules = await Promise.all(tasks);
        // console.log(modules);

        return send(
          req,
          res,
          `export default ${JSON.stringify({
            content,
            modules,
          })}`,
          "js"
        );
      });
    },
    resolveId(id) {
      if (markdownMap[id]) {
        return id;
      }
    },
    transform(code, id) {
      if (!/\.md\.\[\d]\.[t|j]sx$/.test(id)) {
        return;
      }
      const index = code.indexOf("ReactDOM.render");
      const before = code.slice(0, index);
      const after = code.slice(index);

      return `${before.replace("import React ", "import React$ ")}
      
      import $_Component from './index';
      const React = {...React$};
      
      const beforeCreateElement = React.createElement;
      React.createElement = (Comp,...rest) => {
        const wrap = window.$_ComponentWrap;
        let NextComp = Comp;

        if(NextComp === $_Component && wrap) { 
          NextComp = wrap(Comp);
        }
        
        return beforeCreateElement(NextComp, ...rest);
      };

      ${after}`;
    },
  };
};
export default mdjsx;
