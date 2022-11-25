import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

const isProd = process.env.NODE_ENV === "production";

esbuild
  .build({
    // esbuild ./src/index.ts --watch --bundle --outfile=dist/main.js --external:vscode --format=cjs --platform=node
    minify: isProd,
    watch: !isProd,
    bundle: true,
    target: ["esnext"],
    format: "esm",
    outfile: "dist/index.js",
    entryPoints: ["src/index.tsx"],
    external: ["virtual:vitdoc/template"],
    plugins: [sassPlugin()],
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
