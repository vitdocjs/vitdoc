// @ts-ignore
import * as path from "path";
import Swig from "swig";

import { mergeConfig, ViteDevServer } from "vite";
import { send } from "vite/dist/node";
import { cleanUrl, isHTMLProxy, resolveMainComponent } from "../../utils";
import { getConfig } from "../../utils/config";
import { getComponentFiles } from "../../utils/rules";

const isDebug = process.env.DEBUG;

const pluginRoot = __dirname.includes("plugins/components-template")
  ? path.resolve(__dirname, "..")
  : path.resolve(__dirname, "plugins/components-template");

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
const scriptModuleRE =
  /(<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>)(.*?)<\/script>/gims;

export const isRouteMap = (id) => /route-map\.json$/.test(id);
export const getRoutes = () => {
  const routes = getComponentFiles().map((path) =>
    `/${path}`.replace(/\.md$/, ".html")
  );
  const tree = routes.reduce((prev, path) => {
    const name = path.replace(/^\/src\//, "").replace(/(\/README)?\.html$/, "");
    const [, groupName, rest] = name.match(/^(\w+?)\/(.+)/) || [];
    if (groupName) {
      if (!prev.some(({ name }) => name === groupName)) {
        prev.push({
          name: groupName,
          children: [],
        });
      }

      prev[prev.findIndex(({ name }) => name === groupName)].children.push({
        name: rest,
        path,
      });
    } else {
      // 没有子目录
      prev.push({
        name,
        path,
      });
    }

    return prev;
  }, []);
  return { tree, routes };
};

export const isCompHTMLProxy = (id) => compHtmlProxyRE.test(id);

const componentsTemplate = () => {
  let input = {};
  let server: ViteDevServer;
  let config;
  let isBuild;
  return {
    name: "vite:packages-template",
    enforce: "pre",
    config(resolvedConfig, { command }) {
      // store the resolved config
      isBuild = command === "build";
      config = resolvedConfig;
      if (!isBuild) {
        return;
      }

      return mergeConfig(resolvedConfig, {
        build: {
          rollupOptions: {
            input: { index: "index.html" },
          },
        },
      });
    },
    resolveId(id) {
      if (isHTMLProxy(id)) {
        return id.replace(/\?html-proxy/g, "?component-html-proxy");
      }
      if (isCompHTMLProxy(id)) {
        return id;
      }
      if (isRouteMap(id)) {
        return id;
      }
      if (id === "index.html") {
        return id;
      }
    },
    async load(id) {
      let file = cleanUrl(id);

      if (isRouteMap(file)) {
        return JSON.stringify(getRoutes());
      }

      if (/\.html$/.test(file)) {
        if (!/^\//.test(file)) {
          file = `/${file}`;
        }
        const { extendTemplate: externalHtml } = getConfig();

        const mdFiles = getComponentFiles().map((file) => `/${file}`);

        const mdFileMap = mdFiles.map((file) => [file, file]);
        const mainFiles = await Promise.all(
          mdFiles.map((file) =>
            resolveMainComponent(
              // @ts-ignore
              { pluginContainer: { resolveId: this.resolve } },
              file
            )
              .then((res) => (res ? res.id.replace(process.cwd(), "") : ""))
              .then((id) => [
                file.replace(/\.md$/, ".tsx.type$.json"),
                id.replace(/\.tsx$/, ".tsx.type$.json"),
              ])
          )
        );

        let html = createHtml({
          moduleMaps: [...mdFileMap, ...mainFiles]
            .filter(Boolean)
            .map(
              ([key, val]) =>
                `"${key}": (cb) => {cb&&cb("${val}");return import("${val}")}`
            ),
          externalHtml,
          dirname: currentPath,
          base: config.base,
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
        }

        return html;
      }
      return;
    },
    configureServer(_server: ViteDevServer) {
      server = _server;
      const { middlewares } = server;

      middlewares.use(async (req, res, next) => {
        let url = cleanUrl(req.url);

        if (
          req.method !== "GET" ||
          isCompHTMLProxy(<string>req.url) ||
          !(req.headers.accept || "").includes("text/html") ||
          !/(\.md|\.html|\/[\w|_|-]+)$/.test(cleanUrl(req.url))
        ) {
          if (isRouteMap(url)) {
            return send(
              req,
              res,
              `export default ${await this.load(url)}`,
              "js"
            );
          }
          if (url === "/") {
            res.writeHead(302, {
              Location: "/index.html",
            });
            res.end();
            return;
          }
          return next();
        }

        if (/\.md$/.test(url)) {
          res.writeHead(302, {
            Location: url.replace(/.md$/, ".html"),
          });
          res.end();
          return;
        }
        if (/\/[\w|_|-]+$/.test(url)) {
          const files = getComponentFiles(path.join(".", url));
          const mdFile = files[0] || path.join(url, "README.html");

          url = path.join("/", mdFile.replace(/\.md$/, ".html"));

          res.writeHead(302, {
            Location: url,
          });
          res.end();

          return;
        }

        const route = path.join(url, "..");
        input[route] = url;

        const html = (await server.pluginContainer.load(url)) as string;

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
