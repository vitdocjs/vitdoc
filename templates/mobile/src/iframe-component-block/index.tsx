import {
  BugOutlined,
  CheckOutlined,
  CopyOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { copyToClipboard, HighLighter, RendererProps, Store } from "@vitdoc/ui";
import {
  useBoolean,
  useCreation,
  useEventEmitter,
  useMemoizedFn,
} from "ahooks";
import classNames from "classnames";
import React from "react";

import { useAtom } from "jotai";
import dropRight from "lodash/dropRight";

import { Tooltip as _Tooltip } from "antd";

import { Device } from "./device";
import "./index.scss";

const Tooltip = _Tooltip as any;

export const IframeComponentBlock = (props: RendererProps) => {
  const { pathHash, error, getModule, value: content, children } = props;

  const { lang, renderer, route } = useCreation(
    () => getModule(content.trim())!,
    [content]
  );

  const beforeChildren = dropRight(children, 1);

  const [{ current }] = useAtom(Store.propertiesPropsStore);

  const eventBus = useEventEmitter();

  const active = current !== undefined && current === content;

  return (
    <div
      className={classNames("mobile-component-area", {
        active,
      })}
    >
      {!!beforeChildren.length && (
        <div className="code-box-demo-description markdown-body vp-doc">
          {beforeChildren}
        </div>
      )}
      <div className="mobile-container">
        <div className="highlight">
          <HighLighter lang={lang} children={content} />
          <div className="code-box-actions">
            <CopyIcon content={content} />
          </div>
        </div>
        <div className="device-container">
          <Device url={`#${route}`} />
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
      onVisibleChange={(v) => {
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
