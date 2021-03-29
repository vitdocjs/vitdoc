import { defineConfig } from "vite";
import TypeFile from "./plugins/type-file";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import componentsTemplate from "./plugins/components-template/src";
import cdnExternals from "vite-plugin-cdn-externals";
import mdjsx from "./plugins/markdown-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true,
  },
  plugins: [
    componentsTemplate(),
    TypeFile(),
    mdjsx(),
    cdnExternals({
      react: "React",
      "react-dom": "ReactDOM",
      "@alifd/next": {
        windowName: "Next",
        find: /^@alif[e|d]\/next$/,
      },
      moment: "moment",
      "moment-timezone": "moment",
    }),
  ],
});
