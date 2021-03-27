// @ts-ignore
import * as path from "path";
import get from "lodash/get";
import Swig from "swig";

import { send } from "vite/dist/node";
import { cleanUrl, fsExist, isCSSRequest, isHTMLProxy } from "../utils";
import { getConfig } from "../utils/config";



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

const componentsTemplate = () => {
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

      const createHtml = Swig.compileFile(
        path.resolve(__dirname, "./plugins/components-template/index.html"),
        {
          // cache: false,
          autoescape: false,
        }
      );

      const { extendTemplate: externalHtml } = getConfig();

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
          path.resolve(process.cwd(), url.replace(/^\//, ""), "index.tsx")
        );

        if (!exist) {
          return next();
        }

        let html = createHtml({ externalHtml, __dirname });
        html = await transformIndexHtml(url, html);
        return send(req, res, html, "html");
      });
    },
  };
};
export default componentsTemplate;
