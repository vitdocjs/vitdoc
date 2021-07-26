import * as path from "path";
import * as parser from "@ali/react-docgen-typescript-loader-add-tag/dist/docgen-typescript";
import {
  cleanUrl,
  getAssetHash,
  getQueryParams,
  invalidate,
  isCSSRequest,
  isJsx,
} from "./utils";
import debounce from "lodash/debounce";
import type { ModuleNode } from "vite";

const TypeFile = ({ prefix = ".type$.json" } = {}) => {
  let lastDoc: Record<string, any> = {};
  const matchReg = new RegExp(`${prefix.replace("$", "\\$")}$`);
  const requestedUrlMap = {};
  function getComponentDocs(fileName) {
    // console.time("get docs");

    const componentDoc = parser
      // @ts-ignore
      .withCompilerOptions({
        jsx: 2, // react
        module: 1, // commonjs
        target: 99,
      })
      .parse([path.resolve(process.cwd(), fileName)]);

    componentDoc.forEach((item) => {
      delete item.block;
      delete item.mtime;
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
  }, 100);

  return {
    name: "vite:type-file",
    handleHotUpdate({ file, timestamp, server }) {
      const url = cleanUrl(path.relative(process.cwd(), file));
      if (isCSSRequest(file) || !isJsx(url) || !requestedUrlMap[url]) {
        return;
      }

      hotUpdateType(server, url, timestamp);

      return;
    },

    resolveId(id) {
      if (matchReg.test(id)) {
        return id.replace(/^\//, "");
      }
      return;
    },
    load(id) {
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
        }

        return JSON.stringify(componentDoc);
      }

      return;
    },
  };
};
export default TypeFile;
