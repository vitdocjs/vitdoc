// @ts-ignore
import * as path from "path";
import Swig from "swig";

import { mergeConfig, ViteDevServer } from "vite";
import { send } from "vite/dist/node";
import { cleanUrl, resolveMainComponent } from "../../utils";
import { getConfig } from "../../utils/config";
import { getComponentFiles } from "../../utils/rules";

const isDebug = process.env.DEBUG ;

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

const compHtmlProxyRE = /\?component-html-proxy&index=(\d+)\.js$/;
const htmlCommentRE = /<!--[\s\S]*?-->/g;
const scriptModuleRE = /(<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>)(.*?)<\/script>/gims;

export const isCompHTMLProxy = (id) => compHtmlProxyRE.test(id);

const componentsTemplate = () => {
  let input = {};
  let server: ViteDevServer;
  return {
    name: "vite:packages-template",
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
      if (isCompHTMLProxy(id)) {
        return id;
      }
      if (Object.values(input).includes(id)) {
        return id;
      }
    },
    async load(id) {
      const file = cleanUrl(id);
      if (Object.values(input).includes(file)) {
        const { extendTemplate: externalHtml } = getConfig();
        const route = path.join("/", path.relative(process.cwd(), id), "..");

        let html = createHtml({
          externalHtml,
          __dirname: currentPath,
          route,
          isDebug,
        });

        if (isCompHTMLProxy(id)) {
          const proxyMatch = id.match(compHtmlProxyRE);
          if (proxyMatch) {
            const index = Number(proxyMatch[1]);
            html = html.replace(htmlCommentRE, "");
            let match;
            scriptModuleRE.lastIndex = 0;
            for (let i = 0; i <= index; i++) {
              match = scriptModuleRE.exec(html);
            }
            if (match) {
              return match[2];
            } else {
              throw new Error(`No matching html proxy module found from ${id}`);
            }
          }
        } else if (server) {
          html = await server.transformIndexHtml(id, html);
          html = html.replace(/\?html-proxy/g, "?component-html-proxy");
        }

        return html;
      }
      return;
    },
    configureServer(_server: ViteDevServer) {
      server = _server;
      const { middlewares } = server;

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          isCompHTMLProxy(<string>req.url) ||
          !(req.headers.accept || "").includes("text/html") ||
          !/(\.html|\/[\w|_|-]+)$/.test(cleanUrl(req.url))
          // !/(\.md|\.html|\/[\w|_|-]+)$/.test(cleanUrl(req.url))
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
        input[route] = url;

        const html = await this.load(url);

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
