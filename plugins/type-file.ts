import * as path from "path";
import * as parser from "react-docgen-typescript-loader-add-tag/dist/docgen-typescript";
import {
  cleanUrl,
  getAssetHash,
  getQueryParams,
  invalidate,
  isCSSRequest,
  isJsx,
} from "./utils";
import debounce from "lodash/debounce";
import keyBy from "lodash/keyBy";
import mapValues from "lodash/mapValues";
import type { ModuleNode } from "vite";

const TypeFile = ({
  prefix = ".type",
  buildMetaFile = "meta.manifest.json" as string | false,
} = {}) => {
  let lastDoc: Record<string, any> = {};
  const matchReg = new RegExp(`${prefix}$`);
  const requestedUrlMap = {};

  let isBuild;
  const metas: any[] = [];

  function getComponentDocs(fileName) {
    // console.time("get docs");

    const componentDoc = parser
      // @ts-ignore
      .withCompilerOptions({
        jsx: 2, // react
        module: 1, // commonjs
        target: 99,
      })
      .parse([path.resolve(process.cwd(), fileName)])
      .map((item) => {
        let { block, mtime, method, props, ...rest } = item;
        props = mapValues(props, ({ parent, ...rest }) => rest);
        return {
          props,
          ...rest,
        };
      });

    // console.timeEnd("get docs");

    const hash = getAssetHash(JSON.stringify(componentDoc));
    lastDoc = { [hash]: componentDoc };

    return {
      doc: componentDoc,
      hash,
    };
  }
  const hotUpdateType = debounce((server, url, timestamp) => {
    const beforeHash = Object.keys(lastDoc)[0];
    const { hash } = getComponentDocs(url.replace(/^\//, ""));

    if (hash === beforeHash) {
      return;
    }

    const mod = server.moduleGraph.getModuleById(`${url}${prefix}`);

    if (!mod) {
      return;
    }

    invalidate(mod, new Date().valueOf(), new Set<ModuleNode>());

    const updates = [mod].map((item) => ({
      type: "js-update",
      path: item.url,
      acceptedPath: item.url,
      timestamp,
    }));

    server.ws.send({
      type: "update",
      updates,
    });
  }, 300);

  return {
    name: "vite:type-file",
    config(config, { command }) {
      isBuild = command === "build";
    },
    handleHotUpdate({ file, timestamp, server }) {
      const url = path.join("/", cleanUrl(path.relative(process.cwd(), file)));
      if (isCSSRequest(file) || !isJsx(url) || !requestedUrlMap[url]) {
        return;
      }

      hotUpdateType(server, url, timestamp);

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
    load(id, ...args) {
      const file = cleanUrl(id);

      if (matchReg.test(file)) {
        requestedUrlMap[file.replace(matchReg, "")] = true;

        const { hash } = getQueryParams(id);

        let componentDoc;
        if (lastDoc[hash]) {
          componentDoc = lastDoc[hash];
        } else {
          const fileName = file.replace(matchReg, "").replace(/^\//, "");

          componentDoc = getComponentDocs(fileName).doc;
          if (isBuild && componentDoc) {
            metas.push({ metas: keyBy(componentDoc, "exportName"), fileName });
          }
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
