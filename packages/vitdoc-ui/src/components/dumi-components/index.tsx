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
  const { default: render, content$, setWrap$ } = demos;
  const { renderers } = useContext(VitDocMarkdownContext)!;
  const CodeBlock = renderers?.["code-block"] ?? ComponentBlock;

  return <CodeBlock value={content$} getModule={() => render} lang="tsx" />;
}

export function DumiDemoGrid(props) {
  return "NULL";
}

export function Link(props) {
  return "LINK";
}
