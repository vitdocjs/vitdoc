import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

esbuild
  .build({
    // esbuild ./src/index.ts --watch --bundle --outfile=dist/main.js --external:vscode --format=cjs --platform=node
    watch: true,
    bundle: true,
    outfile: "dist/index.js",
    entryPoints: ["src/index.tsx"],
    plugins: [sassPlugin()],
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
