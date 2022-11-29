import path from "path";
import { Plugin } from "vite";

export default function VitDocHmr() {
  const key = "virtual:vitdoc-hmr";
  return {
    name: "vitdoc:hmr",
    apply: "serve",
    resolveId(id) {
      if (id === key) {
        return path.resolve(__dirname, "client");
      }
    },
  } as Plugin;
}
