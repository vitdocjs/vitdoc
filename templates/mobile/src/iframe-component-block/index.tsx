import { CheckOutlined, CopyOutlined } from "@ant-design/icons";
import { copyToClipboard, HighLighter, RendererProps, Store } from "@vitdoc/ui";
import { useBoolean, useCreation, useMemoizedFn } from "ahooks";
import classNames from "classnames";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import noop from "lodash/noop";
import { Tooltip as _Tooltip } from "antd";
import { Device } from "./device";

import "./index.scss";

const Tooltip = _Tooltip as any;

export const IframeComponentBlock = (props: RendererProps) => {
  const { getModule, demoid: id = "" } = props;

  const { lang, content, route } = useCreation(
    () => getModule?.(id?.trim()) ?? ({} as any),
    [getModule]
  );

  const [{ current }] = useAtom(Store.propertiesPropsStore);

  const active = current !== undefined && current === content;

  return (
    <div
      className={classNames("mobile-component-area", "component-area", {
        active,
      })}
    >
      <div className="mobile-container">
        <div className="highlight">
          <HighLighter lang={lang} children={content} />
        </div>
        <div className="device-container">
          <Device
            actions={[<CopyIcon key="copy-icon" content={content} />]}
            url={`#${route}`}
          />
        </div>
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
      onClick={copy}
      onOpenChange={(v) => {
        !v &&
          setTimeout(() => {
            setFalse();
          }, 500);
      }}
    >
      {copied ? (
        <CheckOutlined
          className="code-box-code-action"
          style={{ color: "#52c41a" }}
        />
      ) : (
        <CopyOutlined className="code-box-code-action" />
      )}
    </Tooltip>
  );
}
