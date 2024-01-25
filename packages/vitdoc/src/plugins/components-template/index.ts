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
} from "../../utils/rules";
import { resolvePkgTheme } from "../../utils/theme";
import { fileURLToPath, resolve } from "mlly";
import { readFile } from "fs/promises";

const isDebug = process.env.DEBUG;

export const isRouteMap = (id) => /route-map\.json$/.test(id);
export const getRoutes = async (docDirs: string[], isMonorepo = false, pluginContainer) => {
  let routes = getComponentFiles(docDirs);

  let routeInfos = await Promise.all(
    routes.map(async (route, index) => {
      const markdownContent = await pluginContainer('modifyMarkdown', [fs.readFileSync(route, "utf8"), path.join(process.cwd(), route)])

      const metas: MarkdownMeta = getMetas(
        await parseMarkdown(markdownContent)
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

    const groupMatches = cleanPath.match(/^([\w-]+?)\/(.+)/) || [];

    const groupName = (group?.title ?? toName(groupMatches[1]))?.replace(
      /-(\w)/g,
      (_, match) => {
        return match.toUpperCase();
      }
    );

    const order = metaOrder ?? index + 0.1;

    if (groupName) {
      const name = title ?? toName(groupMatches[2]);
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
        ...(isMonorepo &&
          (() => {
            const groupPath = readmePath.match(/^(\/[\w-]+)(\/[\w-]+)/);

            const packageJsonPath =
              isMonorepo &&
              groupPath &&
              path.join(groupPath.slice(1, 3).join(""), "package.json");

            // fetch package.json in the monorepo
            const packageJsonInfo =
              packageJsonPath &&
              JSON.parse(
                fs.readFileSync(
                  path.join(process.cwd(), packageJsonPath),
                  "utf8"
                )
              );

            return {
              packageJsonInfo: {
                packageName: packageJsonInfo.name,
                packageVersion: packageJsonInfo.version,
              },
            };
          })()),
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
const vitdocRouterId = "virtual:vitdoc-router";

const resolvePkg = (pkgName) => {
  return resolve(pkgName, {
    url: import.meta.url,
  }).then(fileURLToPath);
};

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
    favicon,
    docDirs,
    isMonorepo,
  } = vitdoc.resolvedConfig;

  const entry = await resolve("@vitdoc/runtime/index.html", {
    url: import.meta.url,
  }).then(fileURLToPath);

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
    async config(resolvedConfig, { command }) {
      // store the resolved config
      isBuild = command === "build";


      const { bundless: alias } = convertAliasByTsconfigPaths(process.cwd());

      config = mergeConfig(resolvedConfig, {
        resolve: {
          alias: {
            ...alias,
            // ...getPackageAlias({ isMonorepo, entryConfig }),  use plugin instead
          },
        },
        optimizeDeps: {
          entries: getMainFiles(),
        },
      });

      config = mergeConfig(config, {
        resolve: {
          alias: [
            {
              find: /^@vitdoc\/ui\/theme$/,
              replacement: await resolvePkg("@vitdoc/ui/theme"),
            },
            {
              find: /^@vitdoc\/ui$/,
              replacement: await resolvePkg("@vitdoc/ui"),
            },
            {
              find: vitdocRouterId,
              replacement: await resolvePkg("@vitdoc/runtime/router"),
            },
          ],
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
    async resolveId(id) {
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
        return await resolvePkg("@vitdoc/runtime");
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
        const ctx = await getRoutes(docDirs, isMonorepo, vitdoc.pluginContainer);
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

        const { name, description } = await readFile(
          path.resolve(process.cwd(), "package.json")
        ).then((res) => JSON.parse(res.toString()!));

        let html = createHtml({
          name,
          description,
          logo,
          favicon,
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
