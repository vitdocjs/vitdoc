import React from "react";
import { useContext } from "react";
import { VitDocMarkdownContext } from "../../context";
import { useDemo } from "../../hooks/loaders";
import { ComponentArea, ComponentBlock } from "../component-area";

export function DumiPage(props) {
  return props.children;
}

export function DumiDemo(props) {
  const id = props.demo.id;

  const demos = useDemo(id);
  if (!demos) {
    return null;
  }
  const { value, pathHash, getModule } = demos;
  const { renderers } = useContext(VitDocMarkdownContext)!;
  const CodeBlock = renderers?.["code-block"] ?? ComponentBlock;

  return <CodeBlock pathHash={pathHash} value={value} getModule={getModule} />;
}

export function DumiDemoGrid(props) {
  return "NULL";
}

export function Link(props) {
  return "LINK";
}
