import * as pkg from "@vitdoc/compile";
const { viteIgnore } = pkg;
import path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    outDir: "dist",
    cssCodeSplit: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        theme: path.resolve(__dirname, "src/theme.tsx"),
      },
      // the proper extensions will be added
      formats: ["es"],
      fileName: (format) => "[name].js",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "react-dom",
        "react-router",
        "react-router-dom",
        "virtual:vitdoc-hmr",
      ],
      output: {
        dir: "dist/esm",
      },
    },
  },
  plugins: [viteIgnore(), cssInjectedByJsPlugin()],
});
