import { Card, Result } from "antd";
import classNames from "classnames";
import chunk from "lodash/chunk";
import unzip from "lodash/unzip";
import React, { CSSProperties, useContext } from "react";
import { VitDocMarkdownContext } from "../../context";
import { useDemo, useMarkdown } from "../../hooks/loaders";
import { IPreviewerProps } from "../../types";
import { ComponentBlock } from "../component-area";
import { MarkdownArea } from "../markdown-area";

import "./index.scss";

export function DumiPage() {
  return <MarkdownArea />;
}

export function DumiDemo(props: {
  demo: {
    id: string;
    inline?: boolean;
  };
  previewerProps: IPreviewerProps;
  className?: string;
  style?: CSSProperties;
}) {
  const { previewerProps } = props;
  const id = props.demo.id;

  const { renderers, DemoProvider } = useContext(VitDocMarkdownContext)!;
  const { loading, error, data } = useDemo(id);

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
      {...(previewerProps as any)}
      previewerProps={previewerProps}
      DemoProvider={DemoProvider}
      className={classNames(props.className, {
        "demo-compact": previewerProps.compact,
      })}
      style={{
        ...props.style,
        ...(previewerProps.background
          ? {
            background: previewerProps.background,
          }
          : {}),
      }}
    />
  );
}
DumiDemo.vitdocDemo$ = true;

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
DumiDemoGrid.vitdocDemo$ = true;

export function Link(props) {
  return "LINK";
}
