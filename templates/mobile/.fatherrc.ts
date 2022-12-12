import { defineConfig } from "father";

const isBuild = process.argv.includes("build");

export default defineConfig({
  esm: isBuild
    ? undefined
    : {
        output: "dist",
        transformer: "esbuild",
      },
});
