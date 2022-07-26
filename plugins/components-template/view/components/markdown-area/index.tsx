import React from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import { ComponentBlock } from "../component-area";
import { useCreation, useMemoizedFn } from "ahooks";
import { PropertyArea } from "../property-area";
import HighLight from "../highlight";

import { remarkFrontMatter } from "./plugins";

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { moduleMap, content, error, pathHash } = res;

  const getModule = useMemoizedFn((value) => moduleMap?.[value.trim()]);

  const code = useMemoizedFn(({ language, value = "" }) => {
    return <HighLight lang={language} children={value} />;
  });

  const markdownComponent = useCreation(
    () => (
      // @ts-ignore
      <ReactMarkdown
        className="markdown-body"
        plugins={[remarkFrontMatter]}
        renderers={{
          code,
          "component-block": (props) => {
            return (
              <ComponentBlock
                {...props}
                error={error}
                pathHash={pathHash}
                renderer={getModule(props.value)}
              />
            );
          },
          "property-code": (props) => {
            return (
              <PropertyArea {...props} renderer={getModule(props.value)} />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    ),
    [content, moduleMap]
  );

  return <div className="markdown-area">{markdownComponent}</div>;
}
