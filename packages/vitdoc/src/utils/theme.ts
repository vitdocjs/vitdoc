import { fileURLToPath, resolve } from "mlly";
import path from "path";

export async function resolveTheme(
  themePkgName: string
): Promise<{ js: string; css: string; theme } | null> {
  const js = await resolve(themePkgName)
    .catch(() => resolve(themePkgName, { url: path.resolve(__dirname) }))
    .then((res) => fileURLToPath(res));

  if (!js) {
    return null;
  }

  const css = fileURLToPath(
    await resolve(`${path.resolve(js, "..")}/style.css`).catch((e) => "")
  );

  return { js, css, theme: path.resolve(js, "../theme.js") };
}
