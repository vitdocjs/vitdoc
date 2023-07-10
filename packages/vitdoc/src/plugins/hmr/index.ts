import path from "path";
import { Plugin } from "vite";
import { removeProcessCwd } from "../../utils";
import { appendHmr } from "./utils";
import { VitdocInstance } from "../../core";

export default function VitDocHmr(vitdoc: VitdocInstance) {
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
      if (/\.type$/.test(id)) {
        return appendHmr(code, removeProcessCwd(id));
      }
    },
  } as Plugin;
}
