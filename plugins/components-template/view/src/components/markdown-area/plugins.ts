import { hasReact, isJsx, isTypes } from "../../../../../utils/lang";

export function remarkCodeBlock(options) {
  return (tree, _file) => {
    const modules: any = [];
    let prevModules: any[] = [];
    const endBlock = () => {
      if (prevModules.length === 1 && prevModules[0].type === "code") {
        modules.push(...prevModules);
        prevModules = [];
        return;
      }

      modules.push({
        type: "card-block",
        children: prevModules,
      });
      prevModules = [];
    };

    (tree.children as any[]).forEach((node) => {
      if (node.type === "thematicBreak") {
        endBlock();
        return;
      }
      if (node.type === "code" && isJsx(node.lang) && isTypes(node.value)) {
        // 类型定义
        modules.push(...prevModules, {
          ...node,
          type: "property-code",
        });
        prevModules = [];
        return;
      }
      prevModules.push(node);
      if (node.type === "code" && hasReact(node.value) && isJsx(node.lang)) {
        modules.push({
          ...node,
          type: "component-block",
          children: prevModules,
        });
        prevModules = [];
        return;
      }
    });

    if (!!prevModules.length) {
      endBlock();
    }

    tree.children = modules;

    return tree;
  };
}
