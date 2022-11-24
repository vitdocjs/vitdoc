import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import HighLight from "../highlight";
import {
  useBoolean,
  useCreation,
  useEventEmitter,
  useMemoizedFn,
} from "ahooks";
import CopyOutlined from "@ant-design/icons/CopyOutlined";
import CodeOutlined from "@ant-design/icons/CodeOutlined";
import CheckOutlined from "@ant-design/icons/CheckOutlined";
import BugOutlined from "@ant-design/icons/BugOutlined";
import classNames from "classnames";
import { copyToClipboard } from "../link-copy";

import "./index.scss";

import dropRight from "lodash/dropRight";
import { useAtom } from "jotai";
import { propertiesPropsStore, useSetPartialProperties } from "../../store";

import { Result, Tooltip as _Tooltip } from "antd";

const Tooltip = _Tooltip as any;

export const ComponentBlock = (props) => {
  const { children, lang, value: content, error, pathHash, renderer } = props;

  const beforeChildren = dropRight(children, 1);

  const [checkCode, { toggle }] = useBoolean();

  const [{ current }] = useAtom(propertiesPropsStore);

  const eventBus = useEventEmitter();

  const active = current !== undefined && current === content;
  return (
    <div
      className={classNames("component-area", {
        active,
      })}
    >
      {!!beforeChildren.length && (
        <div className="code-box-demo-description markdown-body vp-doc">
          {beforeChildren}
        </div>
      )}
      <ComponentArea
        pathHash={pathHash}
        error={error}
        renderer={renderer}
        lang={lang}
        content={content}
        eventBus={eventBus}
        // defaultCodePanel={index === 0}
      />
      <div className="code-box-actions">
        <Tooltip title="Debug" onClick={eventBus.emit}>
          <BugOutlined
            className={classNames("code-box-code-action", { active })}
          />
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
};

export function ComponentArea(props) {
  const { renderer, content, eventBus, pathHash, error } = props;
  const componentRef = useRef() as any;

  const invoked = useRef(false);
  const newComp = useRef(new Map());

  let [{ defaultProps, props: componentStateProps, current }] =
    useAtom(propertiesPropsStore);
  const setPartialProps = useSetPartialProperties();
  const defaultPropsRef = useRef();

  const componentProps = useCreation(() => {
    if (!current) {
      return componentStateProps;
    }

    if (current === content) {
      return componentStateProps;
    }
    return {};
  }, [componentStateProps, current]);

  eventBus.useSubscription(() => {
    let content = props.content;
    if (current !== undefined && current === content) {
      content = undefined;
    }
    setPartialProps({
      current: content,
      defaultProps: defaultPropsRef.current || {},
    });
  });

  const setDefaultProps = useMemoizedFn((props) => {
    defaultPropsRef.current = props;

    if (!Object.keys(defaultProps).length) {
      setPartialProps({
        defaultProps: props,
      });
    }
  });

  const wrapProps = useMemoizedFn((Component, { React: OutReact }) => {
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
    Object.assign(outputComp, Component);

    outputComp.visionProps = componentProps;
    outputComp.origin$ = Component;
    outputComp.wrap$ = (Component) => wrapProps(Component, { React: OutReact });

    newComp.current.set(Component, outputComp);

    return outputComp;
  });

  useEffect(() => {
    renderer(componentRef.current, {
      wrap: wrapProps,
    }).then((ele) => {
      if (ele) {
        // export default mode
        ReactDOM.render(ele, componentRef.current);
      }
    });
  }, [renderer, componentProps]);

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
    </>
  );
}

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
