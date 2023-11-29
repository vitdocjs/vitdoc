import { autoLoadCSS, viteIgnore } from "@vitdoc/compile";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";


export default defineConfig({
  build: {
    outDir: "dist",
    cssCodeSplit: true,
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
        "virtual:vitdoc-router",
      ],
      output: {
        dir: "dist/esm",
      },
    },
  },
  plugins: [
    viteIgnore(),
    autoLoadCSS(),
    dts({
      entryRoot: path.resolve(__dirname, "src"),
      outDir: "dist/esm",
      insertTypesEntry: true,
      // tsconfigPath: path.resolve(__dirname, "../../", "tsconfig.json"),
      exclude: "**/node_modules/**",
    }),
  ],
});
