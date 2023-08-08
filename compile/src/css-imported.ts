import path, { join } from "path";
import { Plugin } from "vite";

export function autoLoadCSS() {
  function makeCssImport(cssPaths: Array<string>): string {
    const cssImport = cssPaths
      .map((css) => {
        return `\n import './${css}';`;
      })
      .join("\n");

    return cssImport;
  }
  return {
    name: "build:runtime",
    apply: "build",
    generateBundle(_, bundle, meta) {
      const getCss = (chunk, cssNames = new Set<any>()) => {
        if (!chunk) return cssNames;
        (chunk.viteMetadata?.importedCss ?? []).forEach((css) =>
          cssNames.add(css)
        );
        chunk.imports?.forEach((imported) => {
          getCss(bundle[imported], cssNames);
        });
        return cssNames;
      };

      Object.entries(bundle).forEach(([key, value]) => {
        if (value.type !== "chunk") return;
        if (!value.isEntry) return;
        const allCss = Array.from(getCss(value));
        value.code = `${value.code}${makeCssImport(allCss)}`;
      });
    },
  } as Plugin;
}
