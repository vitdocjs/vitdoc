import LinkOutlined from "@ant-design/icons/LinkOutlined";
import React from "react";
import copy from "copy-to-clipboard";

// @ts-ignore
import {  message  } from "antd";

export function copyToClipboard(str: string) {
  copy(str);

  message.success("Copy successfully !");
}

export function LinkCopy({ route }) {
  return (
    <LinkOutlined
      className="copy-link-icon"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        const { origin, pathname } = location;
        copyToClipboard(`${origin}${pathname}#${route}`);
      }}
    />
  );
}
