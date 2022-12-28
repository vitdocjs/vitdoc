export function viteIgnore() {
  return {
    name: "vitdoc-dynamic-comments",
    generateBundle(option, bundle) {
      Object.values(bundle).forEach((chunk: any) => {
        const fileContent = chunk.code ?? "";
        const regexp = /import\((\w+?)\)/g;
        if (regexp.test(fileContent)) {
          chunk.code = fileContent.replace(
            regexp,
            "import( /* @vite-ignore */ $1)"
          );
        }
      });
    },
  };
}
