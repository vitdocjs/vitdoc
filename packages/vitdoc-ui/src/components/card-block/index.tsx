import React from "react";
import { useCreation } from "ahooks";
import dropRight from "lodash/dropRight";
import last from "lodash/last";
import { DumiDemo, DumiDemoGrid } from "../dumi-components";

import "./index.scss";

export function CardBlock(props) {
  const children = React.Children.toArray(props.children);
  const [beforeChildren, codeChilren] = useCreation(() => {
    const lastChild = last(children, 1);
    if (lastChild?.type === DumiDemo || lastChild?.type === DumiDemoGrid) {
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
