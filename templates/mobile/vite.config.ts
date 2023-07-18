import pkg from "@vitdoc/compile";
const { viteIgnore } = pkg;
import path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  resolve: {},
  build: {
    outDir: "dist",
    cssCodeSplit: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        builtins: path.resolve(__dirname, "src/builtins.tsx"),
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
        "@vitdoc/ui",
        "@vitdoc/ui/theme",
        "react-router",
        "react-router-dom",
        "virtual:vitdoc-hmr",
      ],
      output: {},
    },
  },
  plugins: [viteIgnore(), cssInjectedByJsPlugin() as any],
});
