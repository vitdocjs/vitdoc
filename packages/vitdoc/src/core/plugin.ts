import { Plugin, PluginFunctionKeys } from "./types";
import { deepMerge } from "./utils";

export function createPluginContainer(plugins: Plugin[]) {
  return async <T extends PluginFunctionKeys>(
    fnName: T,
    args: Parameters<NonNullable<Plugin[T]>>,
    options?: {
      iterate?: <R = ReturnType<NonNullable<Plugin[T]>> | null>(
        prev: R,
        next: R
      ) => R;
    }
  ) => {
    let prev: any = args[0];
    const iterate =
      options?.iterate ?? (typeof prev === "object" ? deepMerge : (a, b) => b);

    for (const p of plugins) {
      const handler = p[fnName] as any;
      if (handler) {
        const next = await handler.apply(void 0, args);
        if (next) {
          args[0] = next;
        }

        prev = iterate(prev, next);
      }
    }

    return prev;
  };
}
