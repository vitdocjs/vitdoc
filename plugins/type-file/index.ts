import * as path from "path";
import { cleanUrl, isCSSRequest, isJsx } from "../utils";
import keyBy from "lodash/keyBy";
import { fork } from "child_process";
import { ModuleGraph } from "vite";

const TypeFile = ({
  prefix = ".type",
  buildMetaFile = "meta.manifest.json" as string | false,
} = {}) => {
  const matchReg = new RegExp(`${prefix}$`);
  const requestedUrlMap = {};

  let isBuild;
  const metas: any[] = [];

  const getComponentDocs = (fileName) => {
    return new Promise((resolve, reject) => {
      // 子进程获取类型定义
      const child = fork(path.resolve(__dirname, "parse-cli.js"), [fileName]);
      child.on("message", (data) => {
        resolve(data);
      });
      child.on("error", (err) => {
        reject(err);
      });
    });
  };

  let moduleGraph: ModuleGraph;
  return {
    name: "vite:type-file",
    config(config, { command }) {
      isBuild = command === "build";
    },
    async handleHotUpdate({ file, modules }) {
      const url = path.join("/", cleanUrl(path.relative(process.cwd(), file)));
      if (isCSSRequest(file) || !isJsx(url) || !requestedUrlMap[url]) {
        return;
      }
      const typeModule = await moduleGraph.getModuleById(`${url}${prefix}`);
      modules.push(typeModule);

      return;
    },

    resolveId(id, importer) {
      if (matchReg.test(id)) {
        if (/^\/src/.test(id)) {
          // REMOVE
          return id;
        }
        return path.join(path.relative(process.cwd(), importer), "..", id);
      }
      return;
    },

    configureServer(_server) {
      moduleGraph = _server.moduleGraph;
    },

    async load(id) {
      const file = cleanUrl(id);

      if (matchReg.test(file)) {
        requestedUrlMap[file.replace(matchReg, "")] = true;

        const mainUrl = file.replace(matchReg, "");
        const fileName = mainUrl.replace(/^\//, "");

        // Dev mode import deps
        // 为了更好的性能，此处在 handleHotUpdate 中处理，仅对一层 Imported 依赖处理
        // if (moduleGraph) {
        // const typeModule = await moduleGraph.getModuleById(id);
        // await moduleGraph.updateModuleInfo(
        //   typeModule,
        //   new Set([...Array.from(typeModule.importedModules), mainUrl]),
        //   null,
        //   new Set(),
        //   null,
        //   true
        // );
        // }

        const componentDoc: any = await getComponentDocs(fileName);
        if (isBuild && componentDoc) {
          metas.push({ metas: keyBy(componentDoc, "exportName"), fileName });
        }

        return componentDoc
          .map((s) => {
            const { exportName } = s;
            if (exportName === "default") {
              return `export default ${JSON.stringify(s)}`;
            }
            return `export const ${exportName} = ${JSON.stringify(s)}`;
          })
          .join("\n");
      }

      return;
    },
    generateBundle(options, bundle) {
      if (buildMetaFile) {
        bundle[buildMetaFile] = {
          type: "asset",
          fileName: buildMetaFile,
          source: JSON.stringify(metas),
        };
      }
    },
  };
};
export default TypeFile;
