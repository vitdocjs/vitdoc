// @ts-ignore
import * as path from "path";
import fs from "fs";
import fromMarkdown from "mdast-util-from-markdown";
import {
  cleanUrl,
  fsExist,
  getAssetHash,
  isDirectCSSRequest,
  isHTMLProxy,
} from "../utils";
import { send } from "vite";

class ModuleNode {
  /**
   * Public served url path, starts with /
   */
  url: string;
  /**
   * Resolved file system path + query
   */
  id: string | null = null;
  file: string | null = null;
  type: "js" | "css";
  importers = new Set<ModuleNode>();
  importedModules = new Set<ModuleNode>();
  acceptedHmrDeps = new Set<ModuleNode>();
  isSelfAccepting = false;
  transformResult: null = null;
  ssrTransformResult: null = null;
  ssrModule: Record<string, any> | null = null;
  lastHMRTimestamp = 0;

  constructor(url: string) {
    this.url = url;
    this.type = isDirectCSSRequest(url) ? "css" : "js";
  }
}

const mdjsx = () => {
  return {
    name: "vite:packages-template",
    configureServer(server) {
      const { middlewares, pluginContainer, moduleGraph } = server;

      middlewares.use(async (req, res, next) => {
        if (
          req.method !== "GET" ||
          isHTMLProxy(req.url)
          //  || req.headers.accept?.includes("text/html")
        ) {
          return next();
        }

        const url = cleanUrl(req.url);

        if (!/\.md$/.test(url)) {
          return next();
        }

        const filePath = path.resolve(process.cwd(), "./" + url);
        const exist = fsExist(filePath);

        if (!exist) {
          return next();
        }

        const content = fs.readFileSync(filePath, "utf-8");

        const tasks = fromMarkdown(content)
          .children.filter(
            ({ type, lang = "" }) =>
              type === "code" && /^[t|j]sx$/.test(<string>lang)
          )
          .map(async (item, index) => {
            const content = <string>item.value || "";
            const hash = getAssetHash(content);

            const modPath = `${filePath}.[${index}].${item.lang}`;
            const mod = new ModuleNode(modPath);
            moduleGraph.idToModuleMap.set(modPath, mod);

            return {
              code: await pluginContainer
                .transform(content, modPath)
                .then(({ code }) => code)
                .catch(() => Promise.resolve("")),
              sourcesContent: content,
              hash,
            };
          });

        const modules = await Promise.all(tasks);

        return send(
          req,
          res,
          `export default ${JSON.stringify({
            content,
            modules,
          })}`,
          "js"
        );
      });
    },
  };
};
export default mdjsx;
