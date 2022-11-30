import { Result } from "antd";
import chunk from "lodash/chunk";
import unzip from "lodash/unzip";
import React, { useContext } from "react";
import { VitDocMarkdownContext } from "../../context";
import { useDemo, useLoadModule, useMarkdown } from "../../hooks/loaders";
import { ComponentBlock } from "../component-area";
import { Card } from "antd";

import "./index.scss";

export function DumiPage(props) {
  return props.children;
}

export function DumiDemo(props) {
  const id = props.demo.id;

  const { loading, error, data } = useDemo(props.load);

  const { renderers } = useContext(VitDocMarkdownContext)!;
  const CodeBlock = renderers?.["code-block"] ?? ComponentBlock;

  if (!!loading) {
    return <Card className="component-area" loading />;
  }

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

  return (
    <CodeBlock
      key={id}
      demoid={id}
      getModule={() => data}
      {...props.previewerProps}
      className={props.className}
      style={props.style}
    />
  );
}

export function DumiDemoGrid(props) {
  const { data: markdowns } = useMarkdown();

  if (!markdowns) {
    return null;
  }

  const cols = markdowns.frontmatter?.demo?.cols ?? 1;

  const items = unzip(chunk(props.items, cols));

  return (
    <div className="demo-grid-container">
      {items.map((col, i) => (
        <section style={{ flex: 1 }} key={String(i)}>
          {col.map((item, k) => {
            return <DumiDemo key={`grid-${item.demo.id}-${k}`} {...item} />;
          })}
        </section>
      ))}
    </div>
  );
}

export function Link(props) {
  return "LINK";
}
