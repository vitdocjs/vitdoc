import { fileURLToPath, resolve } from "mlly";
import path from "path";
import { mergeConfig, Plugin } from "vite";

export default function VitDocHmr() {
  const key = "virtual:vitdoc-hmr";
  return {
    name: "vitdoc:hmr",
    async config(config) {
      const res = mergeConfig(config, {
        optimizeDeps: {
          include: [
            fileURLToPath(
              await resolve("eventemitter3", { url: path.resolve(__dirname) })
            ),
          ],
        },
      });
      console.log("🚀 #### ~ config ~ res", res);

      return res;
    },
    resolveId(id) {
      if (id === key) {
        return path.resolve(__dirname, "client/index.js");
      }
    },
  } as Plugin;
}
