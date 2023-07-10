import { createPluginContainer } from "./plugin";
import { ResolvedConfig, UserConfig } from "./types";
import { ConfigType } from "../types";
import { resolveConfig } from "./config";

export type VitdocInstance = ReturnType<typeof createInstance>;

export function createInstance() {
  return {
    async init(config: UserConfig) {
      const resolvedConfig = await resolveConfig(config);

      this.pluginContainer = createPluginContainer(resolvedConfig.plugins);

      this.resolvedConfig = resolvedConfig;
    },
  } as {
    resolvedConfig: ResolvedConfig;
    init(config: ConfigType): Promise<void>;
    pluginContainer: ReturnType<typeof createPluginContainer>;
  };
}
