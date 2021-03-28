export const isJsx = (lang: string) => /^[j|t]sx$/.test(lang);

export const isCSSLang = (lang: string) =>
  /^(css|less|sass|scss|styl|stylus|postcss)$/.test(lang);
