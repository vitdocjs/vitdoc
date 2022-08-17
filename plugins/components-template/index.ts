// @ts-ignore
import * as path from "path";
import Swig from "swig";

import { mergeConfig, send, ViteDevServer } from "vite";
import { cleanUrl, isHTMLProxy } from "../utils";
import { getConfig } from "../utils/config";
import { getComponentFiles, getMainFiles } from "../utils/rules";
import { getMetas, parseMarkdown } from "../utils/markdown";
import * as fs from "fs";
import { MarkdownMeta } from "../utils/types";

const isDebug = process.env.DEBUG;

const currentPath = path.resolve(__dirname, "./view/dist");

export const createHtml = Swig.compileFile(
  path.resolve(__dirname, "./index.html"),
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
  let routes = getComponentFiles();

  const routeInfos = routes
    .map((route, index) => {
      const metas: MarkdownMeta = getMetas(
        parseMarkdown(fs.readFileSync(route, "utf8"))
      );

      const order = metas.order ?? index + 0.1;

      return {
        ...metas,
        order,
        route,
      };
    })
    .sort((a, b) => a.order - b.order);

  const tree = routeInfos.reduce((prev, routeInfo, index) => {
    const {
      title,
      group,
      order: metaOrder,
      sidemenu,
    }: MarkdownMeta = routeInfo;

    let readmePath = routeInfo.route;

    if (sidemenu === false) {
      return prev;
    }

    readmePath = `/${readmePath}`;

    const cleanPath = readmePath
      .replace(/^\/src\//, "")
      .replace(/(\/README)?\.md$/, "");

    const matches = cleanPath.match(/^(\w+?)\/(.+)/) || [];

    const groupName = group?.title ?? matches[1];

    const order = metaOrder ?? index + 0.1;

    if (groupName) {
      const name = title ?? matches[2];
      let nextChild = prev.find(({ name }) => name === groupName);
      if (!nextChild) {
        nextChild = {
          name: groupName,
          order: group?.order ?? index + 0.1,
          children: [],
        };
        prev.push(nextChild);
      }
      const groupChildren = nextChild.children;

      groupChildren.push({
        name,
        order,
        path: readmePath,
      });
    } else {
      // 没有子目录
      prev.push({
        name: title ?? cleanPath,
        order,
        path: readmePath,
      });
    }

    return prev;
  }, []);

  const sort = (data) => {
    if (Array.isArray(data.children)) {
      data.children = sort(data.children);
    }
    return data.sort((a, b) => a.order - b.order);
  };

  routes = routeInfos.map(({ route }) => `/${route}`);

  return { tree: sort(tree), routes };
};

export const isCompHTMLProxy = (id) => compHtmlProxyRE.test(id);

const entry = path.resolve(__dirname, "../index.html");

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
      config = mergeConfig(resolvedConfig, {
        optimizeDeps: {
          entries: getMainFiles(),
        },
      });

      if (!isBuild) {
        return config;
      }

      return mergeConfig(config, {
        build: {
          rollupOptions: {
            input: { index: entry },
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
        return "route-map.json";
      }

      if (id === entry) {
        return "index.html";
      }
      if (/^\/mock/.test(id)) {
        const currentPath = id.replace(/^\//, "");
        if (fs.existsSync(currentPath)) {
          return currentPath;
        }
      }
    },
    async load(id) {
      let file = cleanUrl(id);

      if (isRouteMap(file)) {
        return JSON.stringify(getRoutes());
      }

      if (/\.html$/.test(file) && !/\.css$/.test(id)) {
        if (!/^\//.test(file)) {
          file = `/${file}`;
        }
        const { extendTemplate: externalHtml } = getConfig();

        const mdFiles = isBuild
          ? getComponentFiles().map((file) => `/${file}`)
          : [];

        const mdFileMap = mdFiles.map((file) => [file, file]);

        let html = createHtml({
          moduleMaps: [...mdFileMap]
            .filter(Boolean)
            .map(
              ([key, val]) =>
                `"${key}": (cb) => {cb&&cb("${val}");return import("${val}")}`
            ),
          externalHtml,
          dirname: currentPath,
          cwd: process.cwd(),
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
              if (match[2] && match[2].includes("globalThis.RuntimeModuleM")) {
                break;
              }
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
              "js",
              {}
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

        return send(req, res, html, "html", {});
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
