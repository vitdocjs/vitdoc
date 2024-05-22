import { resolve } from "mlly";
import path from "path";
import { fileURLToPath } from "url";
import { mergeConfig, Plugin, UserConfig } from "vite";
import { createInstance } from "../core";
import vitdocRuntime from "../plugins/runtime";
import vitDocHMR from "../plugins/hmr";
import mdjsx from "../plugins/markdown-jsx";
import TypeFile from "../plugins/type-file";
import { ConfigType } from "../types";
import { getRootPath } from "../utils";

const vitdocInstance = createInstance();

export async function vitdoc(config: ConfigType = {}): Promise<Plugin[]> {
  const cwd = process.cwd();

  await vitdocInstance.init(config);


  return [
    {
      name: "vitdoc:config",
      async config(config) {
        return mergeConfig(
          {
            base: process.env.VITE_BASE_HOST || "/",
            define: {
              __PACKAGE_VERSION__: JSON.stringify(process.env.PACKAGE_VERSION || ""),
            },
            optimizeDeps: {
              include: [
                "react-dom",
                "react",
                "@vitdoc/ui",
                "@vitdoc/ui/theme",
                "virtual:vitdoc-router",
              ],
            },
            build: {
              target: "esnext",
              outDir: "dist/stories",
              manifest: true,
            },
            server: {
              cors: true,
              fs: {
                allow: [
                  await getRootPath(""),
                  await resolve("@vitdoc/runtime", {
                    url: import.meta.url,
                  })
                    .then(fileURLToPath)
                    .then((filepath) => path.resolve(filepath, "../../")),
                  cwd,
                ],
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
    vitdocRuntime(vitdocInstance),
    TypeFile(),
    mdjsx(vitdocInstance),
    vitDocHMR(vitdocInstance),
  ] as Plugin[];
}

export default vitdoc;
