// @ts-ignore
import * as path from "path";
import * as fs from "fs";
import { send } from "vite/dist/node";
import { cleanUrl, isHTMLProxy } from "./utils";

let memMap = {};
const fsExist = (path: string) => {
  if (path in memMap) {
    return memMap[path];
  }
  memMap[path] = fs.existsSync(path);
  return memMap[path];
};

const packagesTemplate = () => {
  return {
    name: "vite:packages-template",
    configureServer({ middlewares, transformIndexHtml }) {
      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          isHTMLProxy(req.url)
          //  || req.headers.accept?.includes("text/html")
        ) {
          return next();
        }

        const url = cleanUrl(req.url);
        if (!/^\/packages/.test(url)) {
          return next();
        }

        const exist = fsExist(
          path.resolve(process.cwd(), url.replace(/^\//, ""), "src/index.tsx")
        );
        if (!exist) {
          return next();
        }

        let html = fs.readFileSync(
          path.resolve(__dirname, "./index.html"),
          "utf-8"
        );
        html = await transformIndexHtml(url, html);
        return send(req, res, html, "html");
      });
    },
  };
};
export default packagesTemplate;
