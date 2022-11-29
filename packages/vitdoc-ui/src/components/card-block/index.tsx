import React from "react";
import { useCreation } from "ahooks";
import dropRight from "lodash/dropRight";
import last from "lodash/last";
import { Divider } from "antd";

import "./index.scss";

export function CardBlock(props) {
  const children = React.Children.toArray(props.children);
  const [beforeChildren, codeChilren] = useCreation(() => {
    const lastChild = last(children, 1);
    if (
      lastChild?.type?.name === "DumiDemo" ||
      lastChild?.type?.name === "DumiDemoGrid"
    ) {
      return [dropRight(children, 1), lastChild];
    } else {
      return [children, null];
    }
  }, []);
  return (
    <div className="vitdoc-card-block">
      {!!beforeChildren.length && (
        <>
          <div className="component-area code-box-demo-description markdown-body vp-doc">
            {beforeChildren}
          </div>
        </>
      )}
      {codeChilren}
    </div>
  );
}
