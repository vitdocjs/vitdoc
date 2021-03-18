import { defineConfig } from "vite";
import TypeFile from "./plugins/type-file";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import packagesTemplate from "./plugins/packages-template";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./mock/react.js"),
      "react-dom": path.resolve(__dirname, "/mock/react-dom.js"),
      moment: path.resolve(__dirname, "/mock/moment"),
      "@alife/dada-vision-utils": path.resolve(__dirname, "/mock/vision-utils"),
    },
  },
  server: {
    cors: true,
  },
  plugins: [reactRefresh(), packagesTemplate(), TypeFile()],
});
