import { defineConfig } from "father";

export default defineConfig({
  platform: "node",
  cjs: {
    ignores: ["src/plugins/hmr/client/**"],
  },
  esm: {
    output: "dist/cjs/plugins/hmr/client",
    input: "src/plugins/hmr/client",
  },
});
