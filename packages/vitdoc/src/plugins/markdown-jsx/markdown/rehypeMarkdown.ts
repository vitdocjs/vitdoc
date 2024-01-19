import type { Root } from "hast";
import path from "path";
import type { Transformer } from "unified";
import { removeProcessCwd, resolveMainComponent } from "../../../utils";

let visit: typeof import("unist-util-visit").visit;
let SKIP: typeof import("unist-util-visit").SKIP;

(async () => {
  ({ visit, SKIP } = await import("unist-util-visit"));
})();

/**
 * rehype plugin for extract fallback description from markdown content
 */
export default function rehypeMarkdown(opts: {
  cwd: string;
  fileAbsPath: string;
}) {
  return async (tree, vFile: any) => {

    const TagMap = new Map<string, {
      node: any
      tagValue: string
    }>();


    visit(tree, "element", (node, i, parent) => {

      if (node.tagName === 'p' || node.tagName === 'text') {

        const mdMatches = (node.value || node.children[0].value)?.match(/^import +(\w+) +from +['|"]([.\/-\w]*?\.md)['|"];?$/)
        if (!mdMatches) return
        const tagName = mdMatches?.[1]
        const tagValue = mdMatches?.[2]
        TagMap.set(tagName, {
          node: node.value ? node : node.children[0],
          tagValue,
        })

      } else if (TagMap.has(node.tagName)) {
        const tag = TagMap.get(node.tagName)
        if (!tag) return
        node.properties = {
          ...node.properties,
          src: tag.tagValue,
        }
        node.tagName = 'embed'
        tag.node.value = ''
      }
    });

  };
}
