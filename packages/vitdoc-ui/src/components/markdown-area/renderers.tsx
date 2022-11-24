import HighLight from "../highlight";
import React from "react";
import { Card } from "antd";
import * as directiveRenderers from "./custom-block";

export const mdRenderers = {
  yaml: () => null,
  code: ({ language, value = "" }) => {
    return <HighLight lang={language} children={value} />;
  },
  link: ({ node, ...props }) => <a {...props} target="_blank" />,
  ...directiveRenderers,
  "card-block": ({ children }) => (
    <Card style={{ marginBottom: 16 }} bodyStyle={{ padding: "8px 24px" }}>
      <div className="vp-doc">{children}</div>
    </Card>
  ),
};
