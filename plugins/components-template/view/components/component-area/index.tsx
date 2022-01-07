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

import dropRight from "lodash/dropRight";
import takeRight from "lodash/takeRight";

const { Result, Tooltip } = window["antd"];

export const componentBlockRender = (props) => {
  const { children } = props;
  const beforeChildren = dropRight(children, 1);
  const lastChild = takeRight(children, 1);
  return (
    <div className="component-area">
      {!!beforeChildren.length && (
        <div className="code-box-demo-description markdown-body">
          {beforeChildren}
        </div>
      )}
      {lastChild}
    </div>
  );
};

export function ComponentArea(props) {
  const { renderer, lang, content, defaultCodePanel } = props;
  const componentRef = useRef() as any;

  const invoked = useRef(false);
  const newComp = useRef(new Map());

  const { componentProps, onSetDefaultProps, error, pathHash } = useContext(
    ComponentPropsContext
  );
  const defaultPropsRef = useRef();

  const setDefaultProps = usePersistFn((props) => {
    defaultPropsRef.current = props;
    defaultCodePanel && onSetDefaultProps?.({ ...(props || {}) });
  });

  const wrapProps = usePersistFn((Component, { React: OutReact }) => {
    if (newComp.current.get(Component)?.visionProps === componentProps) {
      return newComp.current.get(Component);
    }

    const outputComp = (props) => {
      if (!invoked.current) {
        setDefaultProps(props);
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
    <>
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
        <div className={pathHash}>
          <div
            className="component-container"
            id="vite-component-container"
            ref={componentRef}
          />
        </div>
      )}
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
    </>
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
