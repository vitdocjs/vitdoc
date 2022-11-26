/**
 * Created by yee.wang on 2021/3/26
 **/
import fs from "fs";
import { ConfigType } from "./types";

import { resolveConfig } from "esbuild-resolve-config";

export function getConfig(): ConfigType {
  const config: ConfigType = resolveConfig<ConfigType>(".vitdocrc") ?? {};

  try {
    if (config.htmlAppend) {
      config.htmlAppend = fs.existsSync(config.htmlAppend)
        ? fs.readFileSync(config.htmlAppend, "utf8")
        : "";
    }
  } catch (e) {}

  return config;
}
