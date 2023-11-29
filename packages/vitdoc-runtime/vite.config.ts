import * as pkg from "@vitdoc/compile";
const { viteIgnore } = pkg;
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {},
  build: {
    outDir: "dist",
    cssCodeSplit: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: path.resolve(__dirname, "src/index.tsx"),
        router: path.resolve(__dirname, "src/router.ts"),
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
        "virtual:vitdoc-layouts",
        "virtual:vitdoc-builtins",
        "virtual:vitdoc-hmr",
        "virtual:vitdoc-router",
      ],
    },
  },
  plugins: [viteIgnore()],
}) as any;
