import type { IThemeLoadResult } from "dumi/dist/features/theme/loader";
import { ModuleGraph, Plugin, transformWithEsbuild, UserConfig } from "vite";
import { cleanUrl } from "../../utils";
import { isCSSLang } from "../../utils/lang";
import { resolvePkgTheme } from "../../utils/theme";
import { addWrapCode, IDemoData, transformDemo } from "./demo/transform-demo";
import { transformMarkdown } from "./markdown/transform";
import { transformAliasToDumi } from "../../utils/alias";
import { VitdocInstance } from "../../core";

const mdProxyRE = /markdown-proxy&id=(.+)$/;

export const isMarkdownProxy = (id) => mdProxyRE.test(id);
export const getDemoId = (id) =>
  id.match(mdProxyRE)?.[1]?.match(/(.+?)(\.\w+)?$/)?.[1];

const mdjsx = (vitdoc: VitdocInstance) => {
  const { template } = vitdoc.resolvedConfig;


  let markdownMap: Record<string, IDemoData> = {};
  let transformPromises: Record<string, Promise<any>> = {};
  let isBuild: boolean;
  let moduleGraph: ModuleGraph;
  let config: UserConfig;

  const themePromise = resolvePkgTheme(template);

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

        // wait for the markdown transform to finish
        await transformPromises[cleanUrl(id)];

        let demoInfo = markdownMap[demoId];

        if (!demoId || !demoInfo) {
          return null;
        }

        if (isCSSLang(demoInfo.lang ?? "")) {
          return `.${demoInfo.pathHash}{${demoInfo.component}}`;
        }

        const demoCode = await transformDemo(demoInfo);

        const vFile = `${id}.tsx`;

        const transformResult = await transformWithEsbuild(demoCode, vFile, {
          target: "esnext",
          sourcefile: vFile,
        });

        transformResult.code = addWrapCode(transformResult.code, demoInfo);

        return transformResult;
      }


      if (!/\.md$/.test(id)) {
        return;
      }

      let themeConfigs = (await themePromise) as IThemeLoadResult;

      themeConfigs = await vitdoc.pluginContainer("modifyTheme", [
        themeConfigs,
      ]);

      transformPromises[id] = transformMarkdown.call(this, {
        alias: transformAliasToDumi(config.resolve?.alias!),
        id,
        pluginContainer: vitdoc.pluginContainer,
        cwd: process.cwd(),
        ...themeConfigs,
        emitDemo(info) {
          markdownMap[info.id] = info;
        },
      });

      return transformPromises[id];
    },
    handleHotUpdate({ modules }) {
      modules?.forEach((module) => {
        if (isMarkdownProxy(module.id)) {
          delete markdownMap[getDemoId(module.id)];
        }
      });
    },
  } as Plugin;
};
export default mdjsx;
