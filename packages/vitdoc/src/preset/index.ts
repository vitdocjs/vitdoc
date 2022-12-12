import path from "path";
import { mergeConfig } from "vite";
import { Plugin } from "vite";
import mdjsx from "../plugins/markdown-jsx";
import componentsTemplate from "../plugins/components-template";
import TypeFile from "../plugins/type-file";
import vitDocHMR from "../plugins/hmr";
import { getConfig } from "../utils/config";
import { ConfigType } from "../types";
import deepmerge from "lodash/merge";

export function vitdoc(config: ConfigType = {}): Plugin[] {
  const cwd = process.cwd();
  config = deepmerge(getConfig(), config);
  return [
    {
      name: "vitdoc:config",
      config(config) {
        return mergeConfig(
          {
            base: process.env.VITE_BASE_HOST || "/",
            optimizeDeps: {
              include: ["react-dom", "react"],
            },
            build: {
              target: "esnext",
              outDir: "dist/stories",
              manifest: true,
            },
            server: {
              cors: true,
              fs: {
                allow: [path.resolve(__dirname), cwd],
              },
            },
            resolve: {
              alias: [
                {
                  find: /^~.+/,
                  replacement: (val) => {
                    return val.replace(/^~/, "");
                  },
                },
              ],
            },
          },
          config
        );
      },
    },
    componentsTemplate(config),
    TypeFile(),
    mdjsx(config),
    vitDocHMR(),
    ...(config.plugins || []),
  ] as Plugin[];
}
