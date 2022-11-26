export const isJsx = (lang: string) => /^[j|t]sx$/.test(lang);

export function hasReact(str) {
  return /ReactDOM\.render/.test(str);
}

export function isTypes(str) {
  return /renderType\$\(.+\)/.test(str);
}

export const isCSSLang = (lang: string) =>
  /^(css|less|sass|scss|styl|stylus|postcss)$/.test(lang);

export const isInlineMeta = (meta: string) => {
  const metas = (meta ?? "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
  return metas.includes("pure");
};
