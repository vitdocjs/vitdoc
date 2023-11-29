import react from "@vitejs/plugin-react";
import { resolveConfig } from "esbuild-resolve-config";
import { mergeConfig } from "vite";
import { vitdoc } from "../dist/vite.mjs";

const config = resolveConfig<any>("vite.config", { defaultConfig: {} });

// https://vitejs.dev/config/
export default async () =>
  mergeConfig(
    {
      plugins: [vitdoc(), react()],
    },
    config
  );
