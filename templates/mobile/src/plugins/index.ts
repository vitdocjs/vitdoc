import { mergeConfig, type UserConfig } from "vite";
import px2vw from "@yuo/postcss-px2vw";

export function vitdocMobilePx2vw() {
  return {
    name: "vitdoc:mobile-px2vw",
    config(config) {
      return mergeConfig(config, {
        css: {
          postcss: {
            plugins: [
              px2vw({
                viewportWidth: 750,
                exclude: /vitdoc|demos/i,
              }),
            ],
          },
        },
      } as UserConfig);
    },
  };
}
