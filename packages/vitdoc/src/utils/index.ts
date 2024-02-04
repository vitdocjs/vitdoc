import { createHash } from "crypto";
import fs from "fs";
import { ResolveOptions, fileURLToPath, resolve } from "mlly";
import path from "path";
import type { ModuleNode } from "vite";

export const queryRE = /\?.*$/;
export const hashRE = /#.*$/;

export const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");
export const removeImportQuery = (url) => url.replace(/([?&])import&/, "$1");

export const removeAllQuery = (url) => url.replace(/[?&].+/, "");

const htmlProxyRE = /\?html-proxy&index=(\d+)\.js$/;
export const isHTMLProxy = (id: string) => htmlProxyRE.test(id);

const cssLangs = `\\.(css|less|sass|scss|styl|stylus|postcss)($|\\?)`;
const cssLangRE = new RegExp(cssLangs);
const directRequestRE = /(\?|&)direct\b/;

export const isJsx = (request: string) =>
  new RegExp(`\\.[j|t]sx($|\\?)`).test(request);

export const isCSSRequest = (request: string) =>
  cssLangRE.test(request) && !directRequestRE.test(request);

export const isDirectCSSRequest = (request: string) =>
  cssLangRE.test(request) && directRequestRE.test(request);

export function getAssetHash(content: Buffer | string) {
  return createHash("sha256").update(content).digest("hex").slice(0, 8);
}

export function getQueryParams(url: string): any {
  const vars = {};
  let hash;
  const hashes = url.substr(1).split("&");
  hashes.forEach((hashStr, i) => {
    hash = hashes[i].split("=");
    vars[hash[0]] = hash[1];
  });
  return vars;
}

let memMap = {};
export const fsExist = (path: string) => {
  if (path in memMap) {
    return memMap[path];
  }
  memMap[path] = fs.existsSync(path);
  return memMap[path];
};

export const getImporter = (
  loadModule: ModuleNode,
  condition: (mod: ModuleNode) => boolean = () => false
) => {
  const { importers } = loadModule;

  const importerArr = Array.from(importers);
  if (!importerArr.length || condition(loadModule)) {
    return loadModule;
  }

  for (const nextModule of importerArr) {
    return getImporter(nextModule);
  }
};

export function removeProcessCwd(path: string, cwd = process.cwd()) {
  return path.replace(cwd, "");
}

export const resolveMainComponent = (mdPath: string, cwd?: string) => {
  const mainPath = path.join(mdPath, "../index");
  const file = (() => {
    const exts = [".tsx"];

    const ext = exts.find((ext) => fs.existsSync(`${mainPath}${ext}`));

    if (ext) {
      return `${mainPath}${ext}`;
    }
    return null;
  })();
  if (file && cwd) {
    return removeProcessCwd(file, cwd);
  }

  return file;
};

export const addUrlParams = (
  url: string,
  params: string | Record<string, any>
) => {
  const paramsStr =
    typeof params === "string"
      ? params
      : Object.entries(params).reduce(
          (previousValue, [key, val]) =>
            previousValue + val ? `${key}=${val}` : "",
          ""
        );

  if (!paramsStr) {
    return url;
  }

  return /[?|&]/.test(url) ? `${url}&${paramsStr}` : `${url}?${paramsStr}`;
};

export function invalidate(
  mod: ModuleNode,
  timestamp: number,
  seen: Set<ModuleNode>
) {
  if (seen.has(mod)) {
    return;
  }
  seen.add(mod);
  mod.lastHMRTimestamp = timestamp;
  mod.transformResult = null;
  mod.importers.forEach((importer) => {
    if (!importer.acceptedHmrDeps.has(mod)) {
      invalidate(importer, timestamp, seen);
    }
  });
}

export function getMD5(str: string) {
  const hash = createHash("md5");
  hash.update(str);
  return hash.digest("hex");
}

export function toName(name: string | undefined) {
  if (!name) {
    return null;
  }
  return name
    .replace(/-/g, " ")
    .replace(/\//g, " - ")
    .replace(/^[a-z] /, "")
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/ \w/g, (s) => s.toUpperCase());
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getRootPath = async (paths: string) => {
  return path.resolve(
    fileURLToPath(await resolve("vitdoc", { url: __dirname })),
    "../../",
    paths
  );
};

/**
 * Get the package directory of the given package name
 */
export const resolvePkgDir = async (pkg: string, options: ResolveOptions) => {
  const getPkgPath = (filePath) => {
    const dir = path.dirname(filePath);
    const pkgPath = path.join(dir, "package.json");
    if (fs.existsSync(pkgPath)) {
      return dir;
    }
    if (dir === "/") {
      return;
    }
    return getPkgPath(dir);
  };
  return resolve(pkg, options)
    .then(fileURLToPath)
    .then((entryPath) => {
      if (/^virtual:/.test(pkg)) {
        return entryPath;
      }
      const dir = getPkgPath(entryPath);
      return dir ?? entryPath;
    });
};
