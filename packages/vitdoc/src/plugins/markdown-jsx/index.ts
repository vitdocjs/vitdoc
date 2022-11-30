import type { IThemeComponent } from "dumi/dist/features/theme/loader";
import { getExportsStatic } from "pkg-exports";
import { ModuleGraph, Plugin, UserConfig } from "vite";
import { ConfigType } from "../../types";
import { resolveTheme } from "../../utils/theme";
import { IDemoData, transformDemo } from "./demo/transform-demo";
import { transformMarkdown } from "./markdown/transform";

const mdProxyRE = /markdown-proxy&id=(.+)$/;

export const isMarkdownProxy = (id) => mdProxyRE.test(id);
export const getDemoId = (id) => id.match(mdProxyRE)?.[1];

const mdjsx = (vitdocConfig: ConfigType) => {
  let markdownMap: Record<string, IDemoData> = {};
  let isBuild: boolean;
  let moduleGraph: ModuleGraph;
  let config: UserConfig;

  const themePromise = resolveTheme(vitdocConfig.template!);
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

        let demoInfo = markdownMap[demoId];

        if (!demoId || !demoInfo) {
          return null;
        }

        const demoCode = await transformDemo(demoInfo);

        return demoCode;
      }

      if (!/\.md$/.test(id)) {
        return;
      }

      return transformMarkdown.call(this, {
        id,
        cwd: process.cwd(),
        builtins: await getBuiltins,
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
