var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
__export(exports, {
  createHtml: () => createHtml,
  default: () => src_default,
  getRoutes: () => getRoutes,
  isCompHTMLProxy: () => isCompHTMLProxy,
  isRouteMap: () => isRouteMap
});
var path = __toModule(require("path"));
var import_swig = __toModule(require("swig"));
var import_vite = __toModule(require("vite"));
var import_node = __toModule(require("vite/dist/node"));
var import_utils = __toModule(require("../../utils"));
var import_config = __toModule(require("../../utils/config"));
var import_rules = __toModule(require("../../utils/rules"));
const isDebug = process.env.DEBUG;
const pluginRoot = __dirname.includes("plugins/components-template") ? path.resolve(__dirname, "..") : path.resolve(__dirname, "plugins/components-template");
const currentPath = isDebug ? path.resolve(pluginRoot, "./") : path.resolve(pluginRoot, "./dist");
const createHtml = import_swig.default.compileFile(path.resolve(pluginRoot, "./index.html"), {
  autoescape: false
});
const compHtmlProxyRE = /\?component-html-proxy&index=(\d+)\.js$/;
const htmlCommentRE = /<!--[\s\S]*?-->/g;
const scriptModuleRE = /(<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>)(.*?)<\/script>/gims;
const isRouteMap = (id) => /route-map\.json$/.test(id);
const getRoutes = () => {
  const routes = (0, import_rules.getComponentFiles)().map((path2) => `/${path2}`.replace(/\.md$/, ".html"));
  const tree = routes.reduce((prev, path2) => {
    const name = path2.replace(/^\/src\//, "").replace(/(\/README)?\.html$/, "");
    const [, groupName, rest] = name.match(/^(\w+?)\/(.+)/) || [];
    if (groupName) {
      if (!prev.some(({ name: name2 }) => name2 === groupName)) {
        prev.push({
          name: groupName,
          children: []
        });
      }
      prev[prev.findIndex(({ name: name2 }) => name2 === groupName)].children.push({
        name: rest,
        path: path2
      });
    } else {
      prev.push({
        name,
        path: path2
      });
    }
    return prev;
  }, []);
  return { tree, routes };
};
const isCompHTMLProxy = (id) => compHtmlProxyRE.test(id);
const componentsTemplate = () => {
  let input = {};
  let server;
  let config;
  let isBuild;
  return {
    name: "vite:packages-template",
    enforce: "pre",
    config(resolvedConfig, { command }) {
      isBuild = command === "build";
      config = resolvedConfig;
      if (!isBuild) {
        return;
      }
      return (0, import_vite.mergeConfig)(resolvedConfig, {
        build: {
          rollupOptions: {
            input: { index: "index.html" }
          }
        }
      });
    },
    resolveId(id) {
      if ((0, import_utils.isHTMLProxy)(id)) {
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
    load(id) {
      return __async(this, null, function* () {
        let file = (0, import_utils.cleanUrl)(id);
        if (isRouteMap(file)) {
          return JSON.stringify(getRoutes());
        }
        if (/\.html$/.test(file)) {
          if (!/^\//.test(file)) {
            file = `/${file}`;
          }
          const { extendTemplate: externalHtml } = (0, import_config.getConfig)();
          const mdFiles = (0, import_rules.getComponentFiles)().map((file2) => `/${file2}`);
          const mdFileMap = mdFiles.map((file2) => [file2, file2]);
          const mainFiles = yield Promise.all(mdFiles.map((file2) => (0, import_utils.resolveMainComponent)({ pluginContainer: { resolveId: this.resolve } }, file2).then((res) => res ? res.id.replace(process.cwd(), "") : "").then((id2) => [
            file2.replace(/\.md$/, ".tsx.type$.json"),
            id2.replace(/\.tsx$/, ".tsx.type$.json")
          ])));
          let html = createHtml({
            moduleMaps: [...mdFileMap, ...mainFiles].filter(Boolean).map(([key, val]) => `"${key}": (cb) => {cb&&cb("${val}");return import("${val}")}`),
            externalHtml,
            dirname: currentPath,
            base: config.base,
            isDebug
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
            html = yield server.transformIndexHtml(id, html);
          }
          return html;
        }
        return;
      });
    },
    configureServer(_server) {
      server = _server;
      const { middlewares } = server;
      middlewares.use((req, res, next) => __async(this, null, function* () {
        let url = (0, import_utils.cleanUrl)(req.url);
        if (req.method !== "GET" || isCompHTMLProxy(req.url) || !(req.headers.accept || "").includes("text/html") || !/(\.md|\.html|\/[\w|_|-]+)$/.test((0, import_utils.cleanUrl)(req.url))) {
          if (isRouteMap(url)) {
            return (0, import_node.send)(req, res, `export default ${yield this.load(url)}`, "js");
          }
          if (url === "/") {
            res.writeHead(302, {
              Location: "/index.html"
            });
            res.end();
            return;
          }
          return next();
        }
        if (/\.md$/.test(url)) {
          res.writeHead(302, {
            Location: url.replace(/.md$/, ".html")
          });
          res.end();
          return;
        }
        if (/\/[\w|_|-]+$/.test(url)) {
          const files = (0, import_rules.getComponentFiles)(path.join(".", url));
          const mdFile = files[0] || path.join(url, "README.html");
          url = path.join("/", mdFile.replace(/\.md$/, ".html"));
          res.writeHead(302, {
            Location: url
          });
          res.end();
          return;
        }
        const route = path.join(url, "..");
        input[route] = url;
        const html = yield server.pluginContainer.load(url);
        return (0, import_node.send)(req, res, html, "html");
      }));
    },
    transform(code, id) {
      if (!new RegExp(`^${currentPath}`).test(id) && !/\.js$/.test(id)) {
        return;
      }
      return code.replace(/import_meta\["hot"]/g, "import.meta.hot").replace(/const __vitePreload/g, "var __vitePreload2");
    }
  };
};
var src_default = componentsTemplate;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createHtml,
  getRoutes,
  isCompHTMLProxy,
  isRouteMap
});
