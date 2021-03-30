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
    server: {
      cors: true,
    },
    plugins: [
      componentsTemplate(),
      TypeFile(),
      mdjsx(),
      cdnExternals({
        "@alifd/next": {
          windowName: "Next",
          find: /^@alif[e|d]\/next$/,
        },
        react: "React",
        "react-dom": "ReactDOM",
        moment: "moment",
        "moment-timezone": "moment",
      }),
    ],
  },
  config
);
