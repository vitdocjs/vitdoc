// @ts-ignore
import * as path from "path";
import * as parser from "@ali/react-docgen-typescript-loader-add-tag/dist/docgen-typescript";
import {
  cleanUrl,
  getAssetHash,
  getQueryParams,
  isCSSRequest,
  isJsx,
} from "./utils";

const alias = {
  js: "application/javascript",
  css: "text/css",
  html: "text/html",
  json: "application/json",
};

const TypeFile = ({ prefix = ".type.json" } = {}) => {
  let lastDoc: Record<string, any> = {};
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

  return {
    name: "vite:type-file",
    handleHotUpdate({ file, modules, server }) {
      const url = "/" + cleanUrl(path.relative(process.cwd(), file));
      if (isCSSRequest(file) || !isJsx(url) || !requestedUrlMap[url]) {
        return;
      }

      setTimeout(() => {
        const beforeHash = Object.keys(lastDoc)[0];
        const { hash } = getComponentDocs(url.replace(/^\//, ""));

        if (hash === beforeHash) {
          return;
        }

        server.ws.send({
          type: "custom",
          event: "packages-update",
          data: { url: `${url}${prefix}`, hash },
        });
      }, 50);

      return;
    },
    configureServer({ middlewares }) {
      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET"
          //  || req.headers.accept?.includes("text/html")
        ) {
          return next();
        }

        const url = cleanUrl(req.url);
        if (!new RegExp(`${prefix}$`).test(url)) {
          return next();
        }

        requestedUrlMap[url.replace(new RegExp(`${prefix}$`), "")] = true;

        const { hash } = getQueryParams(req.url);

        let componentDoc;
        if (lastDoc[hash]) {
          componentDoc = lastDoc[hash];
        } else {
          const fileName = url
            .replace(new RegExp(`${prefix}$`), "")
            .replace(/^\//, "");

          componentDoc = getComponentDocs(fileName).doc;
        }

        res.setHeader("Content-Type", alias.js);

        return res.end(`export default ${JSON.stringify(componentDoc)}`);
      });
    },
  };
};
export default TypeFile;
