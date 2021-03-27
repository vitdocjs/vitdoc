import React from "react";
import { useMarkdown, useRealComponent } from "../../utils/loaders";
import ReactMarkdown from "react-markdown";
import HighLight from "@alife/intl-comp-highLighter/dist/index";
import "@alife/intl-comp-highLighter/dist/index.css";
import classNames from "classnames";

// @ts-ignore
const { Tag } = window.antd;

import "./index.scss";

interface IProps {}

export function MarkdownArea(props: IProps) {
  const component = useRealComponent();
  const res = useMarkdown();

  if (!res || !component) {
    return null;
  }
  console.log(component);


  const { moduleMap, content, renderer, setRenderer } = res;

  const code = ({ language, value = "" }) => {
    const fn = moduleMap[value.trim()];
    const onChange = () => {
      setRenderer(() => fn);
    };
    return (
      <div
        className={classNames({
          "clickable-block": /^[j|t]sx$/.test(language),
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
