#!/usr/bin/env node

import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function start() {
  process.argv.push("--config", path.resolve(__dirname, "../vite.config.ts"));
  const viteBin = path.resolve(require.resolve("vite"), "../bin/vite.js");
  return import(pathToFileURL(viteBin).toString());
}

start();
