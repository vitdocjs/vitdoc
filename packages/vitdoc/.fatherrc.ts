import { defineConfig } from "father";

export default defineConfig({
  platform: "node",
  cjs: {
    output: "dist",
    ignores: ["src/plugins/hmr/client/**"],
  },
  esm: {
    output: "esm",
  },
});
