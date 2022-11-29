import { fork } from "child_process";
import keyBy from "lodash/keyBy";
import * as path from "path";
import { ModuleGraph, normalizePath, Plugin } from "vite";
import { cleanUrl, isCSSRequest, isJsx } from "../../utils";

const TypeFile = ({
  prefix = ".type",
  buildMetaFile = false as boolean | string,
} = {}) => {
  if (buildMetaFile === true) {
    buildMetaFile = "types.manifest.json";
  }
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

      // append the type file to the HMR update
      const typeModule = await moduleGraph.getModuleById(`${url}${prefix}`);
      if (typeModule) {
        modules.push(typeModule);
      }

      return;
    },

    resolveId(id) {
      if (matchReg.test(id)) {
        return id;
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
        const fileName = normalizePath(mainUrl.replace(/^\//, ""));

        const componentDoc: any = await getComponentDocs(fileName);
        if (isBuild && componentDoc) {
          metas.push({ metas: keyBy(componentDoc, "exportName"), fileName });
        }

        if (!Object.keys(componentDoc).length) {
          return `export default {};`;
        }

        // 补充 default
        componentDoc.unshift({
          ...componentDoc[0],
          exportName: "default",
        });

        let code = componentDoc
          .map((s) => {
            const { exportName } = s;
            if (exportName === "default") {
              return `export default ${JSON.stringify(s)}`;
            }
            return `export const ${exportName} = ${JSON.stringify(s)}`;
          })
          .join("\n");

        const appendHmr = (code: string) => {
          return `
            ${code}

            if(import.meta.hot){
              import.meta.hot.accept((newModule) => {
		            return globalThis.$VitDocUpdateHMRNewModule$?.("${file}", newModule);
              })
            }

            `;
        };

        code = appendHmr(code);

        return code;
      }

      return;
    },
    generateBundle(options, bundle) {
      if (buildMetaFile) {
        bundle[buildMetaFile as string] = {
          type: "asset",
          fileName: buildMetaFile,
          source: JSON.stringify(metas),
        } as any;
      }
    },
  } as Plugin;
};
export default TypeFile;
