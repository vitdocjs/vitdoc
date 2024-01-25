import { ConfigType, PluginOption } from "./types";

export type * from "./types";

export * from "@vitdoc/ui";

export function defineConfig(config: ConfigType) {
  return config;
}

export function definePluginConfig(config: PluginOption) {
  return config;
}