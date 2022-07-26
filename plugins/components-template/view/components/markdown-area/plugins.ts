import { hasReact, isJsx, isTypes } from "../../../../utils/lang";

export function remarkFrontMatter() {
  return (tree, _file) => {
    const modules: any = [];
    let prevModules: any[] = [];
    (tree.children as any[]).forEach((node) => {
      if (node.type === "thematicBreak") {
        modules.push(...prevModules);
        prevModules = [];
        return;
      }
      if (node.type === "code" && isJsx(node.lang) && isTypes(node.value)) {
        modules.push(...prevModules, {
          ...node,
          type: "property-code",
        });
        prevModules = [];
        return;
      }
      if (node.type === "code" && hasReact(node.value) && isJsx(node.lang)) {
        modules.push({
          ...node,
          type: "component-block",
          children: prevModules,
        });
        prevModules = [];
        return;
      }
      prevModules.push(node);
    });

    if (!!prevModules.length) {
      modules.push(...prevModules);
    }

    tree.children = modules;

    return tree;
  };
}
