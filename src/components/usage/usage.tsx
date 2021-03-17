import * as React from "react";
import HighLight from "@alife/intl-comp-highLighter/dist/index";
import "@alife/intl-comp-highLighter/dist/index.css";

import "./index.scss";
import { USAGE_DEFAULT_TAB } from "../../constants";

import {
  useComponentInfo,
  useDocsSourceCode,
  useTypeFile,
} from "../../utils/loaders";

// @ts-ignore
const { Tabs } = window.antd;

export function getReactContent({ packageName, sourceCode }) {
  let imports = "";
  imports += `import Component from '${packageName}';\n`;
  imports += `import React from 'react';\n`;
  imports += `import ReactDOM from 'react-dom';\n`;
  imports += `\n`;

  imports += `// import '${packageName}/dist/index.css';\n`;
  imports += `\n`;

  if (sourceCode) {
    imports += sourceCode;
  }

  return imports;
}

export function Usage({ prefix = "", componentProps }) {
  delete componentProps.itemData;

  const propertyTypes = useTypeFile();

  const raw = useDocsSourceCode(prefix);

  const { packageName } = useComponentInfo() || {};

  const dadaSchema = {
    uiType: propertyTypes?.displayName,
    ...componentProps,
  };

  const dataSource = [
    {
      type: "React",
      lang: "jsx",
      content: getReactContent({
        packageName,
        sourceCode: raw,
      }),
    },
    {
      type: "DadaSchema",
      lang: "json",
      content: JSON.stringify(dadaSchema, null, 2),
    },
  ];

  const defaultActiveKey = localStorage.getItem(USAGE_DEFAULT_TAB) || "1";

  return (
    <>
      <b className="block-title">Usage</b>
      <Tabs
        onChange={(tab) => {
          localStorage.setItem(USAGE_DEFAULT_TAB, tab);
        }}
        defaultActiveKey={defaultActiveKey}
        size="small"
        className="usage-container"
      >
        {dataSource.map(({ lang, type, content }, index) => (
          <Tabs.TabPane tab={type} key={index}>
            <div className={`code-pane language-${lang}`}>
              <HighLight lang={lang}>{content}</HighLight>
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
}
