import { promises as fs, existsSync } from "fs";
import { getPackageInfo } from "local-pkg";
import { findExports, resolve as resolvePath } from "mlly";
import path, { resolve } from "path";
import { fileURLToPath, pathToFileURL } from "url";

export async function resolveIndexFile(name) {
  if (!path.isAbsolute(name)) return name;

  const findPath = (filePath) => {
    const extensions = [".mjs", ".js", ".ts", ".tsx"];
    let found = null as null | string;
    extensions.some((ext) => {
      const verifyPath = filePath + ext;
      if (existsSync(verifyPath)) {
        found = verifyPath;
        return true;
      }
      return false;
    });

    return found;
  };

  // name is a directory
  let found = findPath(name);
  if (found) return found;

  if ((await fs.stat(name).catch(() => null))?.isDirectory()) {
    found = findPath(path.join(name, "index"));
    if (found) return found;
  }

  return name;
}

export interface GetExportsOptions {
  url?: string;
  /**
   * Interop default exports
   *
   * @default true
   */
  interop?: boolean;
}

export async function getExportsStatic(
  name: string,
  options?: GetExportsOptions
) {
  const map = new Map<string, Promise<string[]>>();

  async function resolveEntry(name: string, importer?: string) {
    if (name.match(/^[@a-z0-9]/)) {
      try {
        const { rootPath, packageJson } = (await getPackageInfo(name, {
          paths: importer ? [fileURLToPath(importer)] : undefined,
        }))!;
        if (!packageJson.exports && packageJson.module)
          return pathToFileURL(resolve(rootPath, packageJson.module)).href;
      } catch {}
    }

    return await resolvePath(name, {
      url: importer,
      extensions: [".mjs", ".js", ".ts", ".tsx"],
      conditions: ["module", "import", "require", "default"],
    });
  }

  async function getExportsRelative(
    relative: string,
    importer?: string
  ): Promise<string[]> {
    const url = await resolveEntry(relative, importer);
    return getExportsUrl(url);
  }

  async function getExportsUrl(url: string) {
    if (!map.has(url)) map.set(url, _getExportsUrl(url));
    return await map.get(url)!;
  }

  async function _getExportsUrl(url: string) {
    const code = await fs.readFile(fileURLToPath(url), "utf8");
    const exports = findExports(code);

    return (
      await Promise.all(
        exports.map(async (i) => {
          if (i.type === "star" && i.specifier)
            return await getExportsRelative(i.specifier, url);
          return i.names;
        })
      )
    ).flat();
  }

  return [...new Set(await getExportsRelative(name, options?.url))].sort();
}
