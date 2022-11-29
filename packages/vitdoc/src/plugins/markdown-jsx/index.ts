import { ModuleGraph, Plugin, UserConfig } from "vite";
import { cleanUrl, removeProcessCwd } from "../../utils";
import { IDemoData, transformDemo } from "./demo/transform-demo";
import { transformMarkdown } from "./markdown/emit";

const mdProxyRE = /markdown-proxy&id=(.+)$/;

export const isMarkdownProxy = (id) => mdProxyRE.test(id);
export const getDemoId = (id) => id.match(mdProxyRE)?.[1];

const mdjsx = () => {
  let markdownMap: Record<string, IDemoData> = {};
  let isBuild: boolean;
  let moduleGraph: ModuleGraph;
  let config: UserConfig;

  return {
    name: "vite:markdown-jsx",
    config(resolvedConfig, { command }) {
      // store the resolved config
      config = resolvedConfig;
      isBuild = command === "build";
    },

    configureServer(_server) {
      moduleGraph = _server.moduleGraph;
    },

    async resolveId(id) {
      if (isMarkdownProxy(id)) {
        return id;
      }
      if (/\.md/.test(id)) {
        return id;
      }
    },
    async load(id) {
      if (isMarkdownProxy(id)) {
        const demoId = getDemoId(id);

        let demoInfo = markdownMap[demoId];

        if (!demoId || !demoInfo) {
          return null;
        }

        const demoCode = await transformDemo(id, demoInfo);

        return demoCode;
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      return transformMarkdown.call(this, {
        id,
        cwd: process.cwd(),
        emitDemo(info) {
          markdownMap[info.id] = info;
        },
      });
    },
    async handleHotUpdate({ modules }) {
      modules?.forEach((module) => {
        if (isMarkdownProxy(module.id)) {
          delete markdownMap[getDemoId(module.id)];
        }
      });
    },
  } as Plugin;
};
export default mdjsx;
