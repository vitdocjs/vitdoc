import glob from "glob";

export const getComponentFiles = (path: string = "src") =>
  glob.sync(`${path ? `${path}/` : ""}**/*.md`, {
    cwd: process.cwd(),
  });

export const getMainFiles = (path: string = "src") =>
  glob.sync(`${path}/**/index.tsx`, {
    cwd: process.cwd(),
  });
