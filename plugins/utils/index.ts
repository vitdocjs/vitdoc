import { createHash } from "crypto";
import fs from "fs";
import type { ModuleNode } from "vite";

export const queryRE = /\?.*$/;
export const hashRE = /#.*$/;

export const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");

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
  condition: (mod: ModuleNode) => boolean = () => true
) => {
  const { importers } = loadModule;

  const importerArr = Array.from(importers);
  if (!importerArr.length && condition(loadModule)) {
    return loadModule;
  }

  for (const nextModule of importerArr) {
    return getImporter(nextModule);
  }
};
