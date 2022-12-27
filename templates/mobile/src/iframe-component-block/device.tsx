import { QRCodeSVG } from "qrcode.react";
import type { FC, ReactNode } from "react";
import React, { useState } from "react";
import {
  CheckOutlined,
  CopyOutlined,
  FileSearchOutlined,
  QrcodeOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { copyToClipboard } from "@vitdoc/ui";
import { useBoolean, useCreation, useMemoizedFn } from "ahooks";
import { Popover, Tooltip } from "antd";

import "./device.scss";

interface IDeviceProps {
  className?: string;
  actions?: ReactNode;
  url: string;
}

export const Device: FC<IDeviceProps> = ({ actions = null, url }) => {
  const [renderKey, setRenderKey] = useState(Math.random());
  const mode = "demo";

  const qrUrl = useCreation(() => {
    const ins = new URL(location.href);
    ins.hash = url;

    return ins.toString();
  }, [url]);

  return (
    <div className={"adm-doc-device"} data-device-type="iOS" data-mode={mode}>
      <iframe title="vitdoc-previewer" src={url} key={renderKey} />
      <div className="code-box-actions">
        {actions}
        <Tooltip title="Open in page">
          <FileSearchOutlined
            className="code-box-code-action"
            onClick={() => open(url)}
          />
        </Tooltip>
        <Popover content={<QRCodeSVG value={qrUrl} size={96} />}>
          <QrcodeOutlined className="code-box-code-action" />
        </Popover>
        <Tooltip title="Refresh">
          <SyncOutlined
            className="code-box-code-action"
            onClick={() => setRenderKey(Math.random())}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export function CopyIcon({ content }) {
  const [copied, { setTrue, setFalse }] = useBoolean();

  const copy = useMemoizedFn(() => {
    copyToClipboard(content);
    setTrue();
  });

  return (
    <Tooltip
      title={copied ? "Copied!" : "Copy Code"}
      onOpenChange={(v) => {
        !v &&
          setTimeout(() => {
            setFalse();
          }, 500);
      }}
    >
      {copied ? (
        <CheckOutlined
          onClick={copy}
          className="code-box-code-action"
          style={{ color: "#52c41a" }}
        />
      ) : (
        <CopyOutlined className="code-box-code-action" onClick={copy} />
      )}
    </Tooltip>
  );
}
