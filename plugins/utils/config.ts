/**
 * Created by yee.wang on 2021/3/26
 **/
import path from "path";
import fs from "fs";
import pickBy from "lodash/pickBy";

export function getConfig() {
  const currentPath = process.cwd();
  let configRc: any = {};
  let targetPackageJson: any = {};
  let extendTemplate = "./external.html";
  try {
    targetPackageJson = require(path.resolve(currentPath, "./package.json"));
  } catch (e) {
    throw new Error("指定项目不存在Package.json");
  }
  try {
    const compPath = path.resolve(currentPath, "./component.config.js");
    if (fs.existsSync(compPath)) {
      configRc = require(compPath);
    }
    const lscPath = path.resolve(currentPath, "./lsc.config.js");
    if (fs.existsSync(lscPath)) {
      configRc = require(lscPath);
    }
  } catch (e) {
    console.error(e);
  }

  try {
    extendTemplate = fs.existsSync(extendTemplate)
      ? fs.readFileSync(extendTemplate, "utf8")
      : "";
  } catch (e) {}

  return pickBy(
    {
      libraryName:
        configRc.libraryName || targetPackageJson.name || "Component",
      extendTemplate,
      storiesWebpackMerge: configRc.storiesWebpackMerge,
      webpackMerge: configRc.webpackMerge,
      viteConfig: configRc.viteConfig,
      devPort: configRc.port,
      rootPath: currentPath,
    },
    (val) => val !== undefined
  );
}
