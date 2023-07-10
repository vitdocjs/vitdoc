import type { IThemeComponent } from "dumi/dist/features/theme/loader";
import { getExportsStatic } from "pkg-exports";
import { ModuleGraph, Plugin, transformWithEsbuild, UserConfig } from "vite";
import { ConfigType } from "../../types";
import { cleanUrl } from "../../utils";
import { isCSSLang } from "../../utils/lang";
import { resolveTheme } from "../../utils/theme";
import { IDemoData, transformDemo } from "./demo/transform-demo";
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

  const themePromise = resolveTheme(template);

  const getBuiltins = (async () => {
    const { theme: source } = (await themePromise)!;
    const themes = await getExportsStatic(source);
    return themes.reduce(
      (acc, theme) =>
        Object.assign(acc, {
          [theme]: {
            specifier: `{ ${theme} }`,
            source,
          } as IThemeComponent,
        }),
      {}
    );
  })();

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
        return transformWithEsbuild(demoCode, vFile, {
          target: "esnext",
          sourcefile: vFile,
        });
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      transformPromises[id] = transformMarkdown.call(this, {
        alias: transformAliasToDumi(config.resolve?.alias!),
        id,
        cwd: process.cwd(),
        builtins: await getBuiltins,
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
