import React from "react";
import { useMarkdown, useRealComponent } from "../../utils/loaders";
import ReactMarkdown from "react-markdown";
import HighLight from "@alife/intl-comp-highLighter/dist/index";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import less from "react-syntax-highlighter/dist/esm/languages/prism/less";
import "@alife/intl-comp-highLighter/dist/index.css";
import classNames from "classnames";

HighLight.registerLanguage("tsx", tsx);
HighLight.registerLanguage("scss", scss);
HighLight.registerLanguage("less", less);

// @ts-ignore
const { Tag } = window.antd;

import "./index.scss";

export function MarkdownArea() {
  const component = useRealComponent();
  const res = useMarkdown();

  if (!res || !component) {
    return null;
  }

  const { moduleMap, content, renderer, setRenderIndex } = res;

  let index = 0;
  const code = ({ language, value = "" }) => {
    const fn = moduleMap?.[value.trim()];

    const clickable = /^[j|t]sx$/.test(language);
    let onChange = () => {};
    if (clickable) {
      onChange = function (tabIndex) {
        setRenderIndex(tabIndex);
      }.bind(null, index);

      index++;
    }

    return (
      <div
        className={classNames({
          "clickable-block": clickable,
          "selected-block": renderer === fn,
        })}
        onClick={onChange}
      >
        {renderer === fn && <Tag>Showing</Tag>}
        <HighLight lang={language} children={value} />
      </div>
    );
  };

  return (
    <div className="markdown-area">
      <ReactMarkdown renderers={{ code }}>{content}</ReactMarkdown>
    </div>
  );
}
