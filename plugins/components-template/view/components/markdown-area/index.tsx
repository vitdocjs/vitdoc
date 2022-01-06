import React from "react";
import ReactMarkdown from "react-markdown";
import HighLight from "@alife/intl-comp-highLighter/dist/index";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import less from "react-syntax-highlighter/dist/esm/languages/prism/less";
import "@alife/intl-comp-highLighter/dist/index.css";
import "./index.scss";
import { ComponentArea, componentBlockRender } from "../component-area";
import { useCreation, usePersistFn } from "ahooks";

import { remarkFrontMatter } from "./plugins";

HighLight.registerLanguage("tsx", tsx);
HighLight.registerLanguage("scss", scss);
HighLight.registerLanguage("less", less);

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { moduleMap, content } = res;

  const code = usePersistFn(({ language, value = "", node }) => {
    const jsx = /^[j|t]sx$/.test(language);
    if (!jsx) {
      return <HighLight lang={language} children={value} />;
    }

    const fn = moduleMap?.[value.trim()];
    return <ComponentArea renderer={fn} lang={language} content={value} />;
  });

  const markdownComponent = useCreation(
    () => (
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
    [content]
  );

  return <div className="markdown-area">{markdownComponent}</div>;
}
