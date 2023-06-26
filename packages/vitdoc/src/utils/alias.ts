import { resolve } from "path";
import { AliasOptions } from "vite";

export function transformAliasToDumi(alias: AliasOptions): object {
  if (!Array.isArray(alias)) return {};
  const aliasOptions = {};

  alias.forEach((item) => {
    if (typeof item.find !== "string") return;
    aliasOptions[item.find] = resolve(item.replacement);
  });

  return aliasOptions;
}
