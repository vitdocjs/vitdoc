import { defineConfig } from "vite";
import TypeFile from "./plugins/type-file";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./mock/react.js"),
      "react-dom": path.resolve(__dirname, "/mock/react-dom.js"),
      moment: path.resolve(__dirname, "/mock/moment"),
    },
  },
  server: {
    cors: true,
  },
  plugins: [ TypeFile()],
});
