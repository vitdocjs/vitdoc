import { Plugin, ResolvedConfig, UserConfig } from "./types";
import { asyncFlatten, deepMerge } from "./utils";
import { createPluginContainer } from "./plugin";
import { flatten } from "lodash-es";

import fs from "fs";

import { resolveConfig as esBuildResolveConfig } from "esbuild-resolve-config";

export function getUserConfig(): UserConfig {
  const defaultConfig = {
    template: "@vitdoc/theme-default",
    metaFileName: "stories.manifest.json",
    docDirs: ["docs", "src"],
  };
  const config: UserConfig =
    esBuildResolveConfig<UserConfig>(".vitdocrc", {
      defaultConfig,
    }) ?? defaultConfig;

  try {
    if (config.htmlAppend) {
      config.htmlAppend = fs.existsSync(config.htmlAppend)
        ? fs.readFileSync(config.htmlAppend, "utf8")
        : "";
    }
  } catch (e) { }

  return config;
}

/**
 * Resolve the config into a usable format.
 * @param config
 */
export async function resolveConfig(
  config: UserConfig
): Promise<ResolvedConfig> {
  config = mergeConfig(getUserConfig(), config);

  const rawWorkerUserPlugins = (
    (await asyncFlatten(config.plugins || [])) as Plugin[]
  ).filter(Boolean);

  const [workerPrePlugins, workerNormalPlugins, workerPostPlugins] =
    sortUserPlugins(rawWorkerUserPlugins);

  let workerConfig = config as any;

  const workerUserPlugins = [
    ...workerPrePlugins,
    ...workerNormalPlugins,
    ...workerPostPlugins,
  ];

  const pluginContainer = createPluginContainer(workerUserPlugins);

  workerConfig = await pluginContainer("config", [workerConfig], {
    iterate: mergeConfig as any,
  });

  workerConfig.plugins = workerUserPlugins;

  await pluginContainer("configResolved", [workerConfig]);

  return workerConfig;
}

/**
 * Merge two configs together.
 * @param defaults
 * @param overrides
 */
export function mergeConfig(
  defaults: Partial<UserConfig>,
  overrides: Partial<UserConfig>
): UserConfig {
  return deepMerge(defaults, overrides);
}

export function sortUserPlugins(
  plugins: (Plugin | Plugin[])[] | undefined
): [Plugin[], Plugin[], Plugin[]] {
  const prePlugins: Plugin[] = [];
  const postPlugins: Plugin[] = [];
  const normalPlugins: Plugin[] = [];

  if (plugins) {
    flatten(plugins).forEach((p) => {
      if (p.enforce === "pre") prePlugins.push(p);
      else if (p.enforce === "post") postPlugins.push(p);
      else normalPlugins.push(p);
    });
  }

  return [prePlugins, normalPlugins, postPlugins];
}
