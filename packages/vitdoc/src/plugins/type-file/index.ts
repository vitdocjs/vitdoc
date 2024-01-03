import { fork } from "child_process";
import { keyBy } from "lodash-es";
import * as path from "path";
import { ModuleGraph, normalizePath, Plugin, ViteDevServer } from "vite";
import { cleanUrl, getRootPath, isCSSRequest, isJsx } from "../../utils";

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

  const getComponentDocs = async (fileName) => {
    const parseScript = await getRootPath("client/parse-cli.mjs");
    return new Promise((resolve, reject) => {
      // 子进程获取类型定义
      const child = fork(parseScript, [fileName]);
      child.on("message", (data) => {
        resolve(data);
      });
      child.on("error", (err) => {
        reject(err);
      });
    });
  };

  let moduleGraph: ModuleGraph;
  let server: ViteDevServer;

  return {
    name: "vite:type-file",
    config(config, { command }) {
      isBuild = command === "build";
    },
    async handleHotUpdate({ file, server }) {
      const url = path.join("/", cleanUrl(path.relative(process.cwd(), file)));
      if (isCSSRequest(file) || !isJsx(url) || !requestedUrlMap[url]) {
        return;
      }

      // append the type file to the HMR update
      const typeModule = await moduleGraph.getModuleById(`${url}${prefix}`);
      if (typeModule) {
        server.watcher.emit("change", typeModule.file);

        return;
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
      server = _server;
      moduleGraph = _server.moduleGraph;
    },

    async load(id) {
      const file = cleanUrl(id);

      if (matchReg.test(file)) {
        requestedUrlMap[file.replace(matchReg, "")] = true;

        const mainUrl = file.replace(matchReg, "");
        const fileName = normalizePath(
          mainUrl.replace(/^\//, "")
            .replace(new RegExp('/?' + process.cwd().replace(/^\//, '') + '/?'), "")
        );

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
