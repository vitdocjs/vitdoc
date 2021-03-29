import glob from "glob";

export const getComponentFiles = () =>
  glob.sync("packages/*/index.tsx", {
    cwd: process.cwd(),
  });
