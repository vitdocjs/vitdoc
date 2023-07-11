import { defineConfig } from "father";

export default defineConfig({
  platform: "node",
  cjs: {
    output: "dist",
    ignores: ["src/plugins/hmr/client/**"],
  },
  esm: {
    output: "esm",
    overrides: {
      "src/plugins/hmr/client": {
        output: "dist/plugins/hmr/client",
      },
    },
  },
});
