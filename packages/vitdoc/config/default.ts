import react from "@vitejs/plugin-react";
import { vitdoc } from "../dist/preset";
import { resolveConfig } from "esbuild-resolve-config";
import { mergeConfig } from "vite";

const config = resolveConfig<any>("vite.config", { defaultConfig: {} });

// https://vitejs.dev/config/
export default mergeConfig(
  {
    plugins: [vitdoc(), react()],
  },
  config
);
