import { LinkOutlined } from "@ant-design/icons";
import React from "react";
import copy from "copy-to-clipboard";

import "./index.scss";

import { message } from "antd";

export function copyToClipboard(str: string) {
  copy(str);

  message.success("Copy successfully !");
}

export function LinkCopy({ route, children }) {
  return (
    <div className="vitdoc-copy-link">
      <span>{children}</span>
      <LinkOutlined
        className="vitdoc-copy-link-icon"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          const { origin, pathname } = location;
          copyToClipboard(`${origin}${pathname}#${route}`);
        }}
      />
    </div>
  );
}
