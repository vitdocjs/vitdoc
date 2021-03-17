// @ts-ignore
import * as path from "path";
import * as parser from "@ali/react-docgen-typescript-loader-add-tag/dist/docgen-typescript";
import { cleanUrl } from "./utils";

const alias = {
  js: "application/javascript",
  css: "text/css",
  html: "text/html",
  json: "application/json",
};

const TypeFile = ({ prefix = ".type.json" } = {}) => {
  return {
    name: "vite:type-file",
    configureServer({ pluginContainer, middlewares, moduleGraph }) {
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

        const fileName = url
          .replace(new RegExp(`${prefix}$`), "")
          .replace(/^\//, "");
        console.time("get docs");

        const componentDoc = parser
          // @ts-ignore
          .withCompilerOptions({
            jsx: 2, // react
            module: 1, // commonjs
            target: 99,
          })
          .parse([path.resolve(process.cwd(), fileName)]);
        console.timeEnd("get docs");

        res.setHeader("Content-Type", alias.js);

        return res.end(`export default ${JSON.stringify(componentDoc)}`);
      });
    },
  };
};
export default TypeFile;
