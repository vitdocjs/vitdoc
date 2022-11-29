import { isInlineMeta, isJsx, isTypes } from "./../../../utils/lang";
import type { Root } from "hast";
import type { Transformer } from "unified";

let visit: typeof import("unist-util-visit").visit;
let EXIT: typeof import("unist-util-visit").EXIT;
let toString: typeof import("hast-util-to-string").toString;

// workaround to import pure esm module
(async () => {
  ({ visit, EXIT } = await import("unist-util-visit"));
  ({ toString } = await import("hast-util-to-string"));
})();

const isAPI = (node: any) => {
  if (node.type === "code" && isJsx(node.lang) && isTypes(node.value))
    return true;

  if (/^<API/.test(node.children?.[0]?.value ?? node.value)) {
    return true;
  }

  return false;
};

const isCode = (node: any) => {
  if (/^<code/.test(node.children?.[0]?.value)) {
    // <code .... />
    return true;
  }
  if (node.type === "code" && isJsx(node.lang) && !isInlineMeta(node.meta)) {
    return true;
  }

  return false;
};

/**
 * rehype plugin for extract fallback description from markdown content
 */
export function remarkCardBlock(this: any): Transformer<Root> {
  return (tree) => {
    const modules: any = [];
    let prevModules: any[] = [];
    const endHtml = () => {
      if (!prevModules.length) {
        return;
      }

      modules.push(
        {
          type: "html",
          value: `<CardBlock type="cardBlock">`,
        },
        ...(prevModules || []).concat({
          type: "html",
          value: `</CardBlock>`,
        })
      );
      prevModules = [];
    };

    (tree.children as any[]).forEach((node) => {
      if (node.type === "thematicBreak") {
        endHtml();
        return;
      }

      if (isAPI(node)) {
        // 类型定义
        modules.push(...prevModules, node);
        prevModules = [];
        return;
      }

      prevModules.push(node);

      if (isCode(node)) {
        // <code .... />
        return endHtml();
      }
    });

    if (!!prevModules.length) {
      endHtml();
    }

    tree.children = modules;

    return tree;
  };
}
