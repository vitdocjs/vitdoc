import React, { useContext, useEffect, useRef } from "react";

import HighLight from "@alife/intl-comp-highLighter/dist/index";

import "./index.scss";
import { ComponentPropsContext } from "../../context";
import { useBoolean, usePersistFn } from "ahooks";
import CopyOutlined from "@ant-design/icons/CopyOutlined";
import CodeOutlined from "@ant-design/icons/CodeOutlined";
import CheckOutlined from "@ant-design/icons/CheckOutlined";
import BugOutlined from "@ant-design/icons/BugOutlined";
import classNames from "classnames";
import { copyToClipboard } from "../link-copy";

const { Result, Tooltip, Typography } = window["antd"];

const { Title, Paragraph } = Typography;

export function ComponentArea(props) {
  const { renderer, lang, content, meta } = props;
  const componentRef = useRef() as any;

  const invoked = useRef(false);
  const newComp = useRef(new Map());

  const { componentProps, onSetDefaultProps, error } = useContext(
    ComponentPropsContext
  );
  const defaultPropsRef = useRef();

  const wrapProps = usePersistFn((Component, { React: OutReact }) => {
    if (newComp.current.get(Component)?.visionProps === componentProps) {
      return newComp.current.get(Component);
    }

    const outputComp = (props) => {
      if (!invoked.current) {
        defaultPropsRef.current = props;
        invoked.current = true;
      }
      const finalProps = Object.assign({}, props, componentProps);
      return OutReact.createElement(Component, finalProps);
    };

    outputComp.visionProps = componentProps;

    newComp.current.set(Component, outputComp);

    return outputComp;
  });

  useEffect(() => {
    renderer && renderer(componentRef.current, wrapProps);
  }, [renderer, componentProps]);

  const [checkCode, { toggle }] = useBoolean();

  const handlerDebugComponent = usePersistFn(() => {
    onSetDefaultProps?.({ ...(defaultPropsRef.current || {}) });
  });

  return (
    <div className="component-area">
      {!!Object.values(meta).length && (
        <div className="code-box-demo-description">
          {meta.title && <Title level={4}>{meta.title}</Title>}
          {meta.desc && <Paragraph>{meta.desc}</Paragraph>}
        </div>
      )}
      <div className="code-box-demo">
        {error ? (
          <Result
            status="warning"
            title="Resource load failed"
            subTitle={
              <span style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
                {error.message}
              </span>
            }
          />
        ) : (
          <div
            className="component-container"
            id="vite-component-container"
            ref={componentRef}
          />
        )}
      </div>
      <div className="code-box-actions">
        <Tooltip title="Debug" onClick={handlerDebugComponent}>
          <BugOutlined className="code-box-code-action" />
        </Tooltip>
        <CopyIcon content={content} />
        <Tooltip
          title={checkCode ? "Hide Code" : "View Code"}
          onClick={() => toggle()}
        >
          <CodeOutlined
            className={classNames(
              "code-box-code-action",
              checkCode && "active"
            )}
          />
        </Tooltip>
      </div>
      {checkCode && <HighLight lang={lang} children={content} />}
    </div>
  );
}

export function CopyIcon({ content }) {
  const [copied, { setTrue, setFalse }] = useBoolean();

  const copy = usePersistFn(() => {
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
