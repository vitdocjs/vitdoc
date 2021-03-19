// @ts-ignore
import * as path from "path";
import fs from "fs";
import get from "lodash/get";
import { send } from "vite/dist/node";
import { cleanUrl, isCSSRequest, isHTMLProxy } from "./utils";

let memMap = {};
const fsExist = (path: string) => {
  if (path in memMap) {
    return memMap[path];
  }
  memMap[path] = fs.existsSync(path);
  return memMap[path];
};

const getImporter = (loadModule) => {
  const { importers } = loadModule;
  const importerArr = Array.from(importers);
  if (!importerArr.length) {
    return loadModule;
  }

  for (const nextModule of importerArr) {
    return getImporter(nextModule);
  }
};

const packagesTemplate = () => {
  return {
    name: "vite:packages-template",
    handleHotUpdate({ file, modules, server }) {
      if (isCSSRequest(file)) {
        return;
      }

      modules.forEach((payload) => {
        const importer = getImporter(payload);
        const url = cleanUrl(get(importer, "url", ""));

        if (url) {
          payload.isSelfAccepting = true;
          setTimeout(() => {
            payload.isSelfAccepting = false;
          });

          server.ws.send({
            type: "custom",
            event: "packages-update",
            data: { url, t: new Date().valueOf() },
          });
        }
      });

      return;
    },
    configureServer(server) {
      const { middlewares, transformIndexHtml } = server;

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          isHTMLProxy(req.url)
          //  || req.headers.accept?.includes("text/html")
        ) {
          return next();
        }

        const url = cleanUrl(req.url);

        const exist = fsExist(
          path.resolve(process.cwd(), url.replace(/^\//, ""), "src/index.tsx")
        );

        if (!exist) {
          return next();
        }

        let html = fs.readFileSync(
          path.resolve(__dirname, "./index.html"),
          "utf-8"
        );
        html = await transformIndexHtml(url, html);
        return send(req, res, html, "html");
      });
    },
  };
};
export default packagesTemplate;
