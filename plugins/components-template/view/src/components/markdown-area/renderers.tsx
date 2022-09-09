import HighLight from "../highlight";
import React from "react";
import { Card } from "antd";

export const mdRenderers = {
  yaml: () => null,
  code: ({ language, value = "" }) => {
    return <HighLight lang={language} children={value} />;
  },
  link: ({ node, ...props }) => <a {...props} target="_blank" />,
  "card-block": ({ children }) => (
    <Card
      className="vp-doc"
      style={{ marginBottom: 16 }}
      bodyStyle={{ padding: "8px 24px" }}
    >
      {children}
    </Card>
  ),
};
