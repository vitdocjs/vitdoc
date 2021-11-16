import LinkOutlined from "@ant-design/icons/LinkOutlined";
import React from "react";

// @ts-ignore
const { message } = window.antd;

export function copyToClipboard(str: string) {
  const el = document.createElement("textarea");
  el.innerText = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  el.remove();

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
