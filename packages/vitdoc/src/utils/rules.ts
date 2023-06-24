import { fsExtra } from "@umijs/utils";
import glob from "glob";
import path from "path";

export const getComponentFiles = (path: string = "") =>
  glob.sync(`${path ? `${path}/` : ""}{,!(node_modules)/**/}*.md`, {
    exclude: ["**/node_modules/**"],
    cwd: process.cwd(),
  });

export const getMainFiles = (path: string = "src") =>
  glob.sync(`${path}/**/index.tsx`, {
    cwd: process.cwd(),
  });

export const getPackageAlias = () => {
  try {
    const entry = glob.sync("src/index.?(ts|tsx)", {
      cwd: process.cwd(),
    });
    if (!entry.length) throw new Error("no entry file");
    return {
      [fsExtra.readJSONSync(path.join(process.cwd(), "package.json")).name]:
        entry[0],
    };
  } catch (e) {
    return {};
  }
};
