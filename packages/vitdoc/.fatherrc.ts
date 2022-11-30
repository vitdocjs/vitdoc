import { defineConfig } from "father";

export default defineConfig({
  platform: "node",
  cjs: {
    output: "dist",
    ignores: ["src/plugins/hmr/client/**"],
  },
  esm: {
    output: "dist/plugins/hmr/client",
    input: "src/plugins/hmr/client",
  },
});
