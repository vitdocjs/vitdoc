import fs from "fs";
import { ConfigType } from "../types";

import { resolveConfig } from "esbuild-resolve-config";

export function getConfig(): ConfigType {
  const defaultConfig = {
    template: "@vitdoc/template-default",
  };
  const config: ConfigType =
    resolveConfig<ConfigType>(".vitdocrc", {
      defaultConfig,
    }) ?? defaultConfig;

  try {
    if (config.htmlAppend) {
      config.htmlAppend = fs.existsSync(config.htmlAppend)
        ? fs.readFileSync(config.htmlAppend, "utf8")
        : "";
    }
  } catch (e) {}

  return config;
}

