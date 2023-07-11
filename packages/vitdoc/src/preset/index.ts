import path from "path";
import { mergeConfig, Plugin } from "vite";
import componentsTemplate from "../plugins/components-template";
import vitDocHMR from "../plugins/hmr";
import mdjsx from "../plugins/markdown-jsx";
import TypeFile from "../plugins/type-file";
import { ConfigType } from "../types";
import { createInstance } from "../core";

const vitdocInstance = createInstance();

export async function vitdoc(config: ConfigType = {}): Promise<Plugin[]> {
  const cwd = process.cwd();

  await vitdocInstance.init(config);

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
                allow: [path.resolve(__dirname, "../../"), cwd],
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
    componentsTemplate(vitdocInstance),
    TypeFile(),
    mdjsx(vitdocInstance),
    vitDocHMR(vitdocInstance),
  ] as Plugin[];
}
