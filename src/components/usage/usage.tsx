import * as React from "react";
// import HighLight from "@alife/intl-comp-highLighter";
import "./index.scss";
import { jsonToJSX } from "./utils";
import { USAGE_DEFAULT_TAB } from "../../constants";

// @ts-ignore
const { Tabs } = window.antd;

export function getReactContent({
  isLibraryComponent,
  componentProps,
  packageName,
  componentName,
}) {
  let imports = "";
  imports += `import ${
    isLibraryComponent ? "Components" : "Component"
  } from '${packageName}';\n`;
  imports += `import React from 'react';\n`;
  imports += `import ReactDOM from 'react-dom';\n`;
  imports += `\n`;

  imports += `// import '${packageName}/dist/index.css';\n`;
  imports += `\n`;

  if (isLibraryComponent) {
    imports += `const Component = Components['${componentName}'];\n`;
  }

  imports += `\n`;

  const { children, ...restProps } = componentProps;

  const jsx = jsonToJSX({ type: "Component", props: restProps, children });

  imports += `ReactDOM.render(${jsx}, mountNode);\n`;

  return imports;
}

export function Usage({
  packageName,
  isLibraryComponent,
  docsRender,
  componentName,
  componentProps,
}) {
  if (!docsRender) {
    return null;
  }

  delete componentProps.itemData;

  const dadaSchema = {
    uiType: componentName,
    ...componentProps,
  };

  const dataSource = [
    {
      type: "React",
      lang: "jsx",
      content: getReactContent({
        isLibraryComponent,
        packageName,
        componentProps,
        componentName,
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
              <div lang={lang}>{content}</div>
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
}
