import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import { ComponentBlock } from "../component-area";
import { useCreation, useMemoizedFn } from "ahooks";
import { PropertyArea } from "../property-area";
import remarkFrontMatter from "remark-frontmatter";
import remarkDirective from "remark-directive";
import { remarkCodeBlock } from "./plugins";
import { mdRenderers } from "./renderers";

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { moduleMap, content, error, pathHash } = res;

  const getModule = useMemoizedFn((value) => moduleMap?.[value.trim()]);

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
        plugins={[remarkDirective, remarkFrontMatter as any, remarkCodeBlock]}
        allowDangerousHtml={true}
        renderers={{
          ...mdRenderers,
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
