import path from "path";
import { Plugin } from "vite";
import { getRootPath, removeProcessCwd } from "../../utils";
import { appendHmr } from "./utils";
import { VitdocInstance } from "../../core";
import { fileURLToPath, resolve } from "mlly";

export default function VitDocHmr(vitdoc: VitdocInstance) {
  const key = "virtual:vitdoc-hmr";
  return {
    name: "vitdoc:hmr",
    async resolveId(id) {
      if (id === key) {
        return await getRootPath("client/hmr.ts");
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
