import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import { ComponentBlock } from "../component-area";
import { useCreation, useMemoizedFn } from "ahooks";
import { PropertyArea } from "../property-area";
import HighLight from "../highlight";
import remarkFrontMatter from "remark-frontmatter";
import { remarkCodeBlock } from "./plugins";

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { moduleMap, content, error, pathHash } = res;

  const getModule = useMemoizedFn((value) => moduleMap?.[value.trim()]);

  const code = useMemoizedFn(({ language, value = "" }) => {
    return <HighLight lang={language} children={value} />;
  });

  const componentBlock = useMemoizedFn((props) => {
    return (
      <ComponentBlock
        {...props}
        error={error}
        pathHash={pathHash}
        renderer={getModule(props.value)}
      />
    );
  });

  const propertyCode = useMemoizedFn((props) => (
    <PropertyArea {...props} renderer={getModule(props.value)} />
  ));

  const markdownElements = useCreation(
    () => (
      // @ts-ignore
      <ReactMarkdown
        className="markdown-body"
        plugins={[remarkFrontMatter as any, remarkCodeBlock]}
        renderers={{
          yaml: () => null,
          code,
          "component-block": componentBlock,
          "property-code": propertyCode,
        }}
      >
        {content}
      </ReactMarkdown>
    ),
    [content, moduleMap]
  );

  return <div className="markdown-area">{markdownElements}</div>;
}
