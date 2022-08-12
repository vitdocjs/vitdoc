import { defineConfig } from "vite";
import cdnExternals from "vite-plugin-cdn-externals";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    outDir: "dist",
    lib: {
      name: "runtime",
      entry: "./src/runtime.tsx",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },

  plugins: [
    cdnExternals({
      react: "React",
      "react-dom": "ReactDOM",
      moment: "moment",
      "moment-timezone": "moment",
    }),
  ],
});
