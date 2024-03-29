import yaml from "js-yaml";
import unified from "unified";

export async function parseMarkdown(content: string) {
  const { default: remarkParse } = await import("remark-parse");
  const { default: remarkFrontMatter } = await import("remark-frontmatter");

  // @ts-ignore
  return unified()
    .use(remarkParse as any)
    .use(remarkFrontMatter)
    .parse(content) as any;
}

export function getMetas(tree) {
  const node = tree.children.find((child) => child.type === "yaml");
  if (!node) {
    return {};
  }
  return yaml.load(node.value);
}
