#!/usr/bin/env node

// const { $ } = require("zx");
// const path = require("path");
const exec = require("shelljs.exec");
const path = require("path");

const shellSyncExec = (command, options = {}) => {
  const { code, error } = exec(command, {
    stdio: "inherit",
    ...options,
  });
  if (!!code) {
    throw new Error(error);
    process.exit(1);
  }
};

process.argv.splice(0, 2);
process.argv.unshift("--config", path.resolve(__dirname, "../vite.config.js"));

const vitePath = path.resolve(__dirname, "../node_modules/.bin/vite");

shellSyncExec(`${vitePath} ${process.argv.join(" ")}`);
