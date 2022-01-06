import React from "react";
import ReactMarkdown from "react-markdown";
import HighLight from "@alife/intl-comp-highLighter/dist/index";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import less from "react-syntax-highlighter/dist/esm/languages/prism/less";
import "@alife/intl-comp-highLighter/dist/index.css";
import "./index.scss";
import { ComponentArea } from "../component-area";
import { useCreation } from "ahooks";

import remarkCodeFrontMatter from "remark-code-frontmatter";

HighLight.registerLanguage("tsx", tsx);
HighLight.registerLanguage("scss", scss);
HighLight.registerLanguage("less", less);

export function MarkdownArea({ data: res }) {
  if (!res) {
    return null;
  }

  const { moduleMap, content } = res;

  const code = ({ language, value = "", node }) => {
    const jsx = /^[j|t]sx$/.test(language);
    if (!jsx) {
      return <HighLight lang={language} children={value} />;
    }

    const frontMatter: Record<string, any> = node?.frontmatter || {};

    const fn = moduleMap?.[value.trim()];
    return (
      <ComponentArea
        renderer={fn}
        lang={language}
        content={value}
        meta={frontMatter}
      />
    );
  };

  const markdownComponent = useCreation(
    () => (
      <ReactMarkdown
        className="markdown-body"
        plugins={[remarkCodeFrontMatter]}
        renderers={{
          code,
        }}
      >
        {content}
      </ReactMarkdown>
    ),
    [content]
  );

  return <div className="markdown-area">{markdownComponent}</div>;
}
