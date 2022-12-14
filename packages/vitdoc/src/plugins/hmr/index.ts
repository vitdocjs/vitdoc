import { fileURLToPath, resolve } from "mlly";
import path from "path";
import { removeProcessCwd } from "../../utils";
import { mergeConfig, Plugin } from "vite";
import { appendHmr } from "./utils";

export default function VitDocHmr() {
  const key = "virtual:vitdoc-hmr";
  return {
    name: "vitdoc:hmr",
    resolveId(id) {
      if (id === key) {
        return path.resolve(__dirname, "client/index.js");
      }
    },

    transform(code, id) {
      if (/\.md$/.test(id)) {
        return appendHmr(code, removeProcessCwd(id));
      }
      if(/\.type$/.test(id)) {
        return appendHmr(code, removeProcessCwd(id));
      }
    },
  } as Plugin;
}
