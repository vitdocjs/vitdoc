import { Result } from "antd";
import React, { useContext } from "react";
import { VitDocMarkdownContext } from "../../context";
import { useDemo } from "../../hooks/loaders";
import { ComponentBlock } from "../component-area";

export function DumiPage(props) {
  return props.children;
}

export function DumiDemo(props) {
  const id = props.demo.id;

  const demos = useDemo(id);
  if (!demos) {
    return null;
  }
  const { value, pathHash, getModule, error } = demos;
  const { renderers } = useContext(VitDocMarkdownContext)!;
  const CodeBlock = renderers?.["code-block"] ?? ComponentBlock;

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

  return <CodeBlock pathHash={pathHash} value={value} getModule={getModule} />;
}

export function DumiDemoGrid(props) {
  return "NULL";
}

export function Link(props) {
  return "LINK";
}
