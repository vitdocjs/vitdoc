var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
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
    var step = (result) => {
      return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
__markAsModule(exports);
__export(exports, {
  createHtml: () => createHtml,
  default: () => src_default
});
var path = __toModule(require("path"));
var import_swig = __toModule(require("swig"));
var import_node = __toModule(require("vite/dist/node"));
var import_utils = __toModule(require("../../utils"));
var import_config = __toModule(require("../../utils/config"));
const isDebug = process.env.DEBUG;
const pluginRoot = path.resolve(__dirname, "plugins/components-template");
const currentPath = isDebug ? path.resolve(pluginRoot, "./") : path.resolve(pluginRoot, "./dist");
const createHtml = import_swig.default.compileFile(path.resolve(pluginRoot, "./index.html"), {
  autoescape: false
});
const componentsTemplate = (options, isBuild) => {
  return {
    name: "vite:packages-template",
    configResolved(resolvedConfig) {
      const {command} = resolvedConfig;
      const isBuild2 = command === "build";
      if (!isBuild2) {
        return;
      }
    },
    configureServer(server) {
      const {middlewares, transformIndexHtml} = server;
      const {extendTemplate: externalHtml} = (0, import_config.getConfig)();
      middlewares.use((req, res, next) => __async(this, null, function* () {
        if (req.method !== "GET" || (0, import_utils.isHTMLProxy)(req.url) || !(req.headers.accept || "").includes("text/html") || !/(\.md|\.html|\/[\w|_|-]+)$/.test((0, import_utils.cleanUrl)(req.url))) {
          return next();
        }
        let url = (0, import_utils.cleanUrl)(req.url);
        if (/\/[\w|_|-]+$/.test(url)) {
          url = path.join(url, "index.html");
        }
        const exist = yield (0, import_utils.resolveMainComponent)(server, path.join(url));
        if (!exist) {
          return next();
        }
        const route = path.join("/", path.relative(process.cwd(), exist.id), "..");
        let html = createHtml({
          externalHtml,
          __dirname: currentPath,
          route,
          isDebug
        });
        html = yield transformIndexHtml(url, html);
        return (0, import_node.send)(req, res, html, "html");
      }));
    },
    transform(code, id) {
      if (!new RegExp(`^${currentPath}`).test(id) && !/\.js$/.test(id)) {
        return;
      }
      return code.replace(/import_meta\["hot"]/g, "import.meta.hot");
    }
  };
};
var src_default = componentsTemplate;
