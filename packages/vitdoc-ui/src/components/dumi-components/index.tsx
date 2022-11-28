import { Result } from "antd";
import React, { useContext } from "react";
import { VitDocMarkdownContext } from "../../context";
import { useMarkdown } from "../../hooks/loaders";
import { ComponentBlock } from "../component-area";

export function DumiPage(props) {
  return props.children;
}

export function DumiDemo(props) {
  const id = props.demo.id;

  const markdowns = useMarkdown();

  const { renderers } = useContext(VitDocMarkdownContext)!;
  const CodeBlock = renderers?.["code-block"] ?? ComponentBlock;

  if (!markdowns) {
    return null;
  }

  const { pathHash, getModule, error } = markdowns;

  if (error) {
    return (
      <div className="component-area">
        <Result
          status="warning"
          title="Resource load failed"
          subTitle={
            <span style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
              {error.message}
            </span>
          }
        />
      </div>
    );
  }

  return <CodeBlock key={id} pathHash={pathHash} demoid={id} getModule={getModule} />;
}

export function DumiDemoGrid(props) {
  return "NULL";
}

export function Link(props) {
  return "LINK";
}
