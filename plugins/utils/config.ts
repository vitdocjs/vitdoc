/**
 * Created by yee.wang on 2021/3/26
 **/
import path from "path";
import { ConfigType } from "./types";
import fs from "fs";

export function getConfig(): ConfigType {
  require("esbuild-register");

  const config: ConfigType =
    require(path.resolve(process.cwd(), ".vitdocrc.ts"))?.default ?? {};

  try {
    if (config.htmlAppend) {
      config.htmlAppend = fs.existsSync(config.htmlAppend)
        ? fs.readFileSync(config.htmlAppend, "utf8")
        : "";
    }
  } catch (e) {}

  return config;
}
