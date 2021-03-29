// @ts-ignore
import * as path from "path";
import Swig from "swig";

import { mergeConfig } from "vite";
import { send } from "vite/dist/node";
import { cleanUrl, isHTMLProxy, resolveMainComponent } from "../../utils";
import { getConfig } from "../../utils/config";
import { getComponentFiles } from "../../utils/rules";

const isDebug = process.env.DEBUG;

const pluginRoot = path.resolve(__dirname, "plugins/components-template");

const currentPath = isDebug
  ? path.resolve(pluginRoot, "./")
  : path.resolve(pluginRoot, "./dist");

export const createHtml = Swig.compileFile(
  path.resolve(pluginRoot, "./index.html"),
  {
    // cache: false,
    autoescape: false,
  }
);

const componentsTemplate = () => {
  let input;
  return {
    name: "vite:packages-template",
    mode: "pre",
    config(resolvedConfig, { command }) {
      // store the resolved config
      const isBuild = command === "build";
      if (!isBuild) {
        return;
      }
      const files = getComponentFiles();

      input = files.reduce((previousValue, currentValue) => {
        return Object.assign(previousValue, {
          [path.join(currentValue, "..")]: path.join(
            currentValue,
            "../index.html"
          ),
        });
      }, {});

      return mergeConfig(resolvedConfig, {
        build: {
          rollupOptions: {
            input,
          },
        },
      });
    },
    resolveId(id) {
      if (Object.values(input).includes(id)) {
        return id;
      }
    },
    load(id) {
      if (Object.values(input).includes(id)) {
        const { extendTemplate: externalHtml } = getConfig();
        const route = path.join("/", path.relative(process.cwd(), id), "..");

        return createHtml({
          externalHtml,
          __dirname: currentPath,
          route,
          isDebug,
        });
      }
    },
    configureServer(server) {
      const { middlewares, transformIndexHtml } = server;

      const { extendTemplate: externalHtml } = getConfig();

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          isHTMLProxy(req.url) ||
          !(req.headers.accept || "").includes("text/html") ||
          !/(\.md|\.html|\/[\w|_|-]+)$/.test(cleanUrl(req.url))
        ) {
          return next();
        }

        let url = cleanUrl(req.url);
        if (/\/[\w|_|-]+$/.test(url)) {
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

        let html = createHtml({
          externalHtml,
          __dirname: currentPath,
          route,
          isDebug,
        });

        html = await transformIndexHtml(url, html);

        return send(req, res, html, "html");
      });
    },
    transform(code, id) {
      if (!new RegExp(`^${currentPath}`).test(id) && !/\.js$/.test(id)) {
        return;
      }

      return code
        .replace(/import_meta\["hot"]/g, "import.meta.hot")
        .replace(/const __vitePreload/g, "var __vitePreload2");
    },
  };
};
export default componentsTemplate;
