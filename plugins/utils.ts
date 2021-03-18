import { createHash } from "crypto";

export const queryRE = /\?.*$/;
export const hashRE = /#.*$/;

export const cleanUrl = (url) => url.replace(hashRE, "").replace(queryRE, "");

const htmlProxyRE = /\?html-proxy&index=(\d+)\.js$/;
export const isHTMLProxy = (id: string) => htmlProxyRE.test(id);

const cssLangs = `\\.(css|less|sass|scss|styl|stylus|postcss)($|\\?)`;
const cssLangRE = new RegExp(cssLangs);
const directRequestRE = /(\?|&)direct\b/;

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
