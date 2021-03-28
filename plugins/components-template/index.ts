// @ts-ignore
import * as path from "path";
import Swig from "swig";

import { send } from "vite/dist/node";
import { cleanUrl, isHTMLProxy, resolveMainComponent } from "../utils";
import { getConfig } from "../utils/config";

export const createHtml = Swig.compileFile(
  path.resolve(__dirname, "./plugins/components-template/index.html"),
  {
    // cache: false,
    autoescape: false,
  }
);

const componentsTemplate = () => {
  return {
    name: "vite:packages-template",
    configureServer(server) {
      const { middlewares, transformIndexHtml } = server;

      const { extendTemplate: externalHtml } = getConfig();

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          isHTMLProxy(req.url) ||
          !(req.headers.accept || "").includes("text/html") ||
          !/(\.md|\.html|\/\w+)$/.test(cleanUrl(req.url))
        ) {
          return next();
        }

        let url = cleanUrl(req.url);
        if (/\/\w+/.test(url)) {
          url = path.join(url, "index.html");
        }

        const exist = await resolveMainComponent(server, path.join(url));

        if (!exist) {
          return next();
        }
        const route = path.join(
          "/",
          path.relative(process.cwd(), exist.id),
          ".."
        );

        let html = createHtml({ externalHtml, __dirname, route });

        html = await transformIndexHtml(url, html);

        return send(req, res, html, "html");
      });
    },
  };
};
export default componentsTemplate;
