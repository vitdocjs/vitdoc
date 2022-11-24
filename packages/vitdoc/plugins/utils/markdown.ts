import unified from "unified";
import remarkParse from "remark-parse";
import remarkFrontMatter from "remark-frontmatter";
import yaml from "js-yaml";

export function parseMarkdown(content: string) {
  return unified()
    .use(remarkParse)
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
