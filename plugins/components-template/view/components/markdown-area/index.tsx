import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import "./index.scss";
import { ComponentArea, ComponentBlock } from "../component-area";
import { useCreation, useEventEmitter, useMemoizedFn } from "ahooks";
import { PropertyArea } from "../property-area";
import HighLight from "../highlight";

import { remarkFrontMatter } from "./plugins";

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { moduleMap, content, error, pathHash } = res;

  const getModule = useMemoizedFn((value) => moduleMap?.[value.trim()]);
  const eventBus = useEventEmitter<string>();

  const isCodeRenderIndexRef = useRef(0);
  const code = useMemoizedFn(({ language, value = "" }) => {
    const jsx = /^[j|t]sx$/.test(language);
    if (!jsx) {
      return <HighLight lang={language} children={value} />;
    }

    const index = isCodeRenderIndexRef.current;
    isCodeRenderIndexRef.current++;

    const fn = getModule(value);

    return (
      <ComponentArea
        pathHash={pathHash}
        error={error}
        eventBus={eventBus}
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
          "component-block": (props) => {
            return <ComponentBlock {...props} eventBus={eventBus} />;
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
