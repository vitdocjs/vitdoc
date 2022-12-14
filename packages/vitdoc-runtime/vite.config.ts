import pkg from "@vitdoc/compile";
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
      },
      // the proper extensions will be added
      formats: ["es"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "react-dom",
        "virtual:vitdoc-template",
        "virtual:vitdoc-hmr",
      ],
    },
  },
  plugins: [viteIgnore()],
});
