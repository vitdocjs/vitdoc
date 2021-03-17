export function getDocsSource(sourceCode: string) {
  const [, demoContent] =
    /\/\*\*.+?DOCS_START.+?\*\*\/([\S\s]+?)\/\*\*.+?DOCS_END.+?\*\*\//.exec(
      sourceCode
    ) || [];
  return demoContent;
}
