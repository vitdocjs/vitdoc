import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import { ComponentArea, componentBlockRender } from "../component-area";
import { useCreation, useMemoizedFn } from "ahooks";

import HighLight from "../highlight";

import { remarkFrontMatter } from "./plugins";

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { moduleMap, content } = res;

  const isCodeRenderIndexRef = useRef(0);
  const code = useMemoizedFn(({ language, value = "", node }) => {
    const jsx = /^[j|t]sx$/.test(language);
    if (!jsx) {
      return <HighLight lang={language} children={value} />;
    }

    const index = isCodeRenderIndexRef.current;
    isCodeRenderIndexRef.current++;

    const fn = moduleMap?.[value.trim()];
    return (
      <ComponentArea
        renderer={fn}
        lang={language}
        content={value}
        defaultCodePanel={index === 0}
      />
    );
  });

  const markdownComponent = useCreation(
    () => (
      // @ts-ignore
      <ReactMarkdown
        className="markdown-body"
        plugins={[remarkFrontMatter]}
        renderers={{
          code,
          "component-block": componentBlockRender,
        }}
      >
        {content}
      </ReactMarkdown>
    ),
    [content, moduleMap]
  );

  return <div className="markdown-area">{markdownComponent}</div>;
}
