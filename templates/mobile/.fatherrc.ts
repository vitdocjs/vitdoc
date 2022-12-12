import { defineConfig } from "father";

const isBuild = process.argv.includes("build");

export default defineConfig({
  esm: isBuild
    ? undefined
    : {
        output: "dist",
        ignores: ["src/plugins/*"],
        transformer: "esbuild",
      },
  cjs: {
    input: "src/plugins",
    output: "dist/plugins",
  },
});
