import { cheerio } from "@umijs/utils";
import * as fs from "fs";
import * as path from "path";
import { convertAliasByTsconfigPaths } from "resolve-ts-alias";
import Swig from "swig";
import { mergeConfig, send, ViteDevServer } from "vite";
import { VitdocInstance } from "../../core";
import { MarkdownMeta } from "../../types";
import { cleanUrl, isHTMLProxy, toName } from "../../utils";
import { getMetas, parseMarkdown } from "../../utils/markdown";
import {
  getComponentFiles,
  getMainFiles,
  getPackageAlias,
} from "../../utils/rules";
import { resolvePkgTheme } from "../../utils/theme";
import { createRequire } from "node:module";

const isDebug = process.env.DEBUG;

export const isRouteMap = (id) => /route-map\.json$/.test(id);
export const getRoutes = async (docDirs: string[]) => {
  let routes = getComponentFiles(docDirs);

  let routeInfos = await Promise.all(
    routes.map(async (route, index) => {
      const metas: MarkdownMeta = getMetas(
        await parseMarkdown(fs.readFileSync(route, "utf8"))
      );

      const order = metas.order ?? index + 0.1;

      return {
        ...metas,
        order,
        route,
      };
    })
  );

  routeInfos = routeInfos.sort((a, b) => a.order - b.order);

  const tree = routeInfos.reduce<any>((prev, routeInfo, index) => {
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
      // remove the first path segment to match the route path
      .replace(/^\/\w+\//, "")
      .replace(/(\/README)?\.md$/, "");

    const matches = cleanPath.match(/^(\w+?)\/(.+)/) || [];

    const groupName = group?.title ?? toName(matches[1]);

    const order = metaOrder ?? index + 0.1;

    if (groupName) {
      const name = title ?? toName(matches[2]);
      let nextChild: any = prev.find(({ name }) => name === groupName);
      if (!nextChild) {
        nextChild = {
          name: groupName,
          key: groupName,
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
        name: title ?? toName(cleanPath),
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

const vitdocRuntimeId = "virtual:vitdoc-runtime";
const vitdocTemplateId = "virtual:vitdoc-layouts";
const vitdocBuiltinsId = "virtual:vitdoc-builtins";

const require = createRequire(import.meta.url);

const componentsTemplate = async (vitdoc: VitdocInstance) => {
  let input = {};
  let server: ViteDevServer;
  let config;
  let isBuild;
  let routeTree: any;

  const {
    metaFileName: buildMetaFile,
    template: templatePath,
    htmlAppend: externalHtml,
    logo,
    docDirs,
  } = vitdoc.resolvedConfig;

  const entry = require.resolve("@vitdoc/runtime/index.html");

  const themePromise = resolvePkgTheme(templatePath);

  async function resolveThemeModule(type: "layouts" | "builtins") {
    return Object.entries((await themePromise)[type])
      .map(([name, content]: any) => {
        return `export ${content.specifier} from '${content.source}';`;
      })
      .join("\n");
  }

  const createHtml = Swig.compileFile(entry, {
    // cache: false,
    autoescape: false,
  });

  return {
    name: "vite:packages-template",
    enforce: "pre",
    config(resolvedConfig, { command }) {
      // store the resolved config
      isBuild = command === "build";

      const { bundless: alias } = convertAliasByTsconfigPaths(process.cwd());

      config = mergeConfig(resolvedConfig, {
        resolve: {
          alias: {
            ...alias,
            ...getPackageAlias(),
          },
        },
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
            output: {
              assetFileNames: `assets/[hash][extname]`,
            },
          },
        },
      });
    },
    resolveId(id) {
      if (isRouteMap(id)) {
        return "route-map.json";
      }

      if (vitdocTemplateId === id) {
        return vitdocTemplateId;
      }

      if (vitdocBuiltinsId === id) {
        return vitdocBuiltinsId;
      }

      if (vitdocRuntimeId === id) {
        return require.resolve("@vitdoc/runtime");
      }

      if (id === entry) {
        return "index.html";
      }
    },
    async load(id: string) {
      let file = cleanUrl(id);

      if (id === vitdocBuiltinsId) {
        return resolveThemeModule("builtins");
      }

      if (id.endsWith(vitdocTemplateId)) {
        return resolveThemeModule("layouts");
      }

      if (isRouteMap(file)) {
        const ctx = await getRoutes(docDirs);
        routeTree = ctx.tree;
        return JSON.stringify(ctx);
      }

      if (/\.html$/.test(file) && !isHTMLProxy(id) && !/\.css$/.test(id)) {
        if (!/^\//.test(file)) {
          file = `/${file}`;
        }

        const mdFiles = isBuild
          ? getComponentFiles(docDirs).map((file) => `/${file}`)
          : [];

        const mdFileMap = mdFiles.map((file) => [file, file]);

        const { name, description } = require(path.resolve(
          process.cwd(),
          "package.json"
        ));

        let html = createHtml({
          name,
          description,
          logo,
          moduleMaps: [...mdFileMap]
            .filter(Boolean)
            .map(
              ([key, val]) =>
                `"${key}": (cb) => {cb&&cb("${val}");return import("${val}")}`
            ),
          externalHtml: externalHtml || "",
          cwd: process.cwd(),
          base: config.base,
          isDebug,
        });

        html = await vitdoc.pluginContainer("modifyHtml", [html, cheerio]);

        if (server) {
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
          !(req.headers.accept || "").includes("text/html") ||
          !/(\.md|\.html|\/[\w|_|-]+)$/.test(cleanUrl(req.url))
        ) {
          if (isRouteMap(url)) {
            return send(
              req,
              res,
              `export default ${await server.pluginContainer.load(url)}`,
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
          const files = getComponentFiles([path.join(".", url)]);
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
      if (!new RegExp(`^${templatePath}`).test(id) && !/\.js$/.test(id)) {
        return;
      }

      return code
        .replace(/import_meta\["hot"]/g, "import.meta.hot")
        .replace(/const __vitePreload/g, "var __vitePreload2");
    },
    generateBundle(options, bundle) {
      if (buildMetaFile) {
        bundle[buildMetaFile as string] = {
          type: "asset",
          fileName: buildMetaFile,
          source: JSON.stringify(routeTree),
        };
      }
    },
  };
};
export default componentsTemplate;
