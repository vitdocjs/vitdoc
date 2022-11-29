import { Card } from "antd";
import React from "react";
import HighLight from "../highlight";

export const mdRenderers = {
  yaml: () => null,
  code: ({ language, value = "" }) => {
    return <HighLight lang={language} children={value} />;
  },
  link: ({ node, ...props }) => <a {...props} target="_blank" />,
  table: ({ children }) => (
    <div className="md-table-container">
      <table>{children}</table>
    </div>
  ),
  "card-block": ({ children }) => (
    <Card style={{ marginBottom: 16 }} bodyStyle={{ padding: "8px 24px" }}>
      <div className="vp-doc">{children}</div>
    </Card>
  ),
};
