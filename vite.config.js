import { mergeConfig } from "vite";
import TypeFile from "./plugins/type-file";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import componentsTemplate from "./plugins/components-template/src";
import cdnExternals from "vite-plugin-cdn-externals";
import mdjsx from "./plugins/markdown-jsx";

const cwd = process.cwd();

let config = {};
try {
  config = require(`${cwd}/vite.config.js`).default;
} catch (e) {}

// https://vitejs.dev/config/
export default mergeConfig(
  {
    define: {
      import_meta: "import.meta",
    },
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
        moment: "moment",
        "moment-timezone": "moment",
        "@alifd/next": {
          windowName: "Next",
          find: /^@alif[e|d]\/next$/,
        },
      }),
    ],
  },
  config
);
