#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function start() {
  process.argv.push("--config", path.resolve(__dirname, "../vite.config.js"));
  return import("../node_modules/vite/bin/vite.js");
}

start();
