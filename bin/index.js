#!/usr/bin/env node

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


shellSyncExec(
  `${path.resolve(
    __dirname,
    "../node_modules/.bin/vite"
  )} --config ${path.resolve(
    __dirname,
    "../vite.config.js"
  )} ${process.argv.join(" ")}`
);
