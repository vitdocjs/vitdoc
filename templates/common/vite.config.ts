import { autoLoadCSS, viteIgnore } from "@vitdoc/compile";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        layouts: path.resolve(__dirname, "src/layouts.tsx"),
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
        "react-router",
        "@vitdoc/ui",
        "@vitdoc/ui/theme",
        "react-router-dom",
        "virtual:vitdoc-hmr",
      ],
      output: {},
    },
  },
  plugins: [viteIgnore(), autoLoadCSS()],
});
