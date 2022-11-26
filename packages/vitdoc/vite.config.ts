import { mergeConfig } from "vite";
import componentsTemplate from "./dist/esm/plugins/components-template";
import mdjsx from "./dist/esm/plugins/markdown-jsx";
import TypeFile from "./dist/esm/plugins/type-file";
import { getConfig } from "./dist/esm/utils/config";
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
    plugins: [componentsTemplate(getConfig()), TypeFile(), mdjsx()],
  },
  config
);
