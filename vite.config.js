import { mergeConfig } from "vite";
import TypeFile from "./plugins/type-file";
import mdjsx from "./plugins/markdown-jsx";
import componentsTemplate from "./plugins/components-template";
import path from "path";
import fs from "fs";

const cwd = process.cwd();

let config = {};

try {
  if (fs.existsSync(`${cwd}/vite.config.js`)) {
    require("esbuild-register");
    config = require(`${cwd}/vite.config.js`).default;
  }
} catch (e) {
  console.log(e);
}

// https://vitejs.dev/config/
export default mergeConfig(
  {
    base: process.env.VITE_BASE_HOST || "/",
    build: {
      target: "esnext",
      outDir: "dist/stories",
      rollupOptions: {
        output: {
          assetFileNames: "assets/[hash].[extname]",
        },
      },
      manifest: true,
    },
    server: {
      cors: true,
      fs: {
        strict: false,
        allow: [path.resolve(__dirname), cwd],
      },
    },
    resolve: {
      alias: [
        {
          find: /^~.+/,
          replacement: (val) => {
            return val.replace(/^~/, "");
          },
        },
      ],
    },
    plugins: [
      componentsTemplate(),
      TypeFile(),
      mdjsx(),
      // cdnExternals({
      // "@alifd/next": {
      //   windowName: "Next",
      //   find: /^@alif[e|d]\/next$/,
      // },
      // react: "React",
      // "react-dom": {
      //   windowName: "ReactDOM",
      //   find: /^react-dom$/,
      // },
      // moment: "moment",
      // "moment-timezone": "moment",
      // }),
    ],
  },
  config
);
