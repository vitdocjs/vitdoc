import { mergeConfig } from "vite";
import componentsTemplate from "./dist/cjs/plugins/components-template";
import mdjsx from "./dist/cjs/plugins/markdown-jsx";
import TypeFile from "./dist/cjs/plugins/type-file";
import vitDocHMR from "./dist/cjs/plugins/hmr";
import react from "@vitejs/plugin-react";
import { getConfig } from "./dist/cjs/utils/config";
import { resolveConfig } from "esbuild-resolve-config";
import path from "path";

const cwd = process.cwd();

const config = resolveConfig<any>("vite.config", { defaultConfig: {} });

// https://vitejs.dev/config/
export default mergeConfig(
  {
    base: process.env.VITE_BASE_HOST || "/",
    build: {
      target: "esnext",
      outDir: "dist/stories",
      manifest: true,
    },
    server: {
      cors: true,
      fs: {
        strict: false,
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
    plugins: [
      componentsTemplate(getConfig()),
      TypeFile(),
      mdjsx(),
      vitDocHMR(),
      react(),
    ],
  },
  config
);
