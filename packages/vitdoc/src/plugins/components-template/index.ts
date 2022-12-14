import * as fs from "fs";
import * as path from "path";
import Swig from "swig";
import { fileURLToPath, resolve } from "mlly";
import { mergeConfig, send, ViteDevServer } from "vite";
import { cleanUrl, isHTMLProxy, toName } from "../../utils";
import { getMetas, parseMarkdown } from "../../utils/markdown";
import { getComponentFiles, getMainFiles } from "../../utils/rules";
import { ConfigType, MarkdownMeta } from "../../types";
import { resolveTheme } from "../../utils/theme";
import convertAliasByTsconfigPaths from "resolve-ts-alias";

const isDebug = process.env.DEBUG;

const compHtmlProxyRE = /\?component-html-proxy&index=(\d+)\.js$/;
const htmlCommentRE = /<!--[\s\S]*?-->/g;
const scriptModuleRE =
  /(<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>)(.*?)<\/script>/gims;

export const isRouteMap = (id) => /route-map\.json$/.test(id);
export const getRoutes = async () => {
  let routes = getComponentFiles();

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

    const groupName = group?.title ?? toName(matches[1]);

    const order = metaOrder ?? index + 0.1;

    if (groupName) {
      const name = title ?? toName(matches[2]);
      let nextChild = prev.find(({ name }) => name === groupName);
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
      // ???????????????
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

export const isCompHTMLProxy = (id) => compHtmlProxyRE.test(id);

const vitdocRuntimeId = "virtual:vitdoc-runtime";
const vitdocTemplateId = "virtual:vitdoc-template";

const componentsTemplate = (
  {
    metaFileName: buildMetaFile = "stories.manifest.json" as false | string,
    template: templatePath = "@vitdoc/template-default",
    htmlAppend: externalHtml,
    logo,
  } = {} as ConfigType
) => {
  let input = {};
  let server: ViteDevServer;
  let config;
  let isBuild;
  let routeTree: any;

  const entry = require.resolve("@vitdoc/runtime/index.html");

  const themePromise = resolveTheme(templatePath);

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
          alias,
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
      if (isHTMLProxy(id)) {
        return id.replace(/\?html-proxy/g, "?component-html-proxy");
      }
      if (isCompHTMLProxy(id)) {
        return id;
      }
      if (isRouteMap(id)) {
        return "route-map.json";
      }

      if (vitdocTemplateId === id) {
        return vitdocTemplateId;
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

      if (id.endsWith(vitdocTemplateId)) {
        const { js, css } = (await themePromise)!;
        let code = `export * from '${js}';`;
        if (css) {
          code = `${code};\n  import '${css}';`;
        }
        return code;
      }

      if (isRouteMap(file)) {
        const ctx = await getRoutes();
        routeTree = ctx.tree;
        return JSON.stringify(ctx);
      }

      if (/\.html$/.test(file) && !/\.css$/.test(id)) {
        if (!/^\//.test(file)) {
          file = `/${file}`;
        }

        const mdFiles = isBuild
          ? getComponentFiles().map((file) => `/${file}`)
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
          externalHtml,
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
