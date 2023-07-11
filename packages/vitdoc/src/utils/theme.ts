import { fileURLToPath, resolve } from "mlly";
import path from "path";
import { getExportsStatic } from "pkg-exports";
import { deepmerge, glob } from "@umijs/utils";
import type {
  IThemeComponent,
  IThemeLoadResult,
} from "dumi/dist/features/theme/loader";

const DEFAULT_THEME = "@vitdoc/theme-default";

export async function resolvePkgTheme(
  themePkgName: string
): Promise<IThemeLoadResult | null> {
  const resolveOneTheme = async (themePkgName: string) => {
    const js = await resolve(themePkgName)
      .catch(() => resolve(themePkgName, { url: path.resolve(__dirname) }))
      .then((res) => fileURLToPath(res));

    if (!js) {
      return null;
    }

    return resolveTheme(DEFAULT_THEME, path.resolve(js, ".."));
  };

  let definedPlugins = (await resolveOneTheme(DEFAULT_THEME))!;

  if (DEFAULT_THEME !== themePkgName) {
    definedPlugins = deepmerge(
      definedPlugins,
      (await resolveOneTheme(themePkgName)) ?? {}
    );
  }
  return definedPlugins;
}

/**
 * convert files to locale map
 */
function getLocaleMapFromDir(globExp: string, dir: string) {
  return glob
    .sync(globExp, { cwd: dir })
    .reduce<IThemeLoadResult["locales"]>((ret, file) => {
      const locale = path.basename(file.replace(/\.json$/, ""));

      ret[locale] = require(path.join(dir, file));

      return ret;
    }, {});
}

export async function resolveTheme(
  themePkgName,
  dir: string
): Promise<IThemeLoadResult> {
  return {
    name: themePkgName,
    path: dir,
    locales: getLocaleMapFromDir("locales/*.json", dir),
    builtins: await getThemeData(path.resolve(dir, "./builtins")),
    layouts: await getThemeData(path.resolve(dir, "./layouts")),
    slots: await getThemeData(path.resolve(dir, "./slots")),
  };
}

export async function getThemeData(
  sourcePath: string
): Promise<Record<string, IThemeComponent>> {
  try {
    const themes = await getExportsStatic(sourcePath);

    return themes.reduce(
      (acc, theme) =>
        Object.assign(acc, {
          [theme]: {
            specifier: `{ ${theme} }`,
            source: sourcePath,
          } as IThemeComponent,
        }),
      {}
    );
  } catch (e) {
    return {};
  }
}
