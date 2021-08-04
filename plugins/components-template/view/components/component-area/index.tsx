import React, { useCallback, useEffect, useRef } from "react";

import "./index.scss";

const { Result } = window["antd"];

export function ComponentArea(props) {
  const { componentProps, onSetDefaultProps, data: Components } = props;
  const componentRef = useRef() as any;

  const invoked = useRef(false);
  const newComp = useRef(new Map());

  const wrapProps = useCallback(
    (Component, { React: OutReact }) => {
      if (newComp.current.get(Component)) {
        return newComp.current.get(Component);
      }

      const outputComp = (props) => {
        if (!invoked.current) {
          onSetDefaultProps && onSetDefaultProps(props);
          invoked.current = true;
        }
        const finalProps = Object.assign({}, props, componentProps);
        return OutReact.createElement(Component, finalProps);
      };

      newComp.current.set(Component, outputComp);

      return outputComp;
    },
    [componentProps]
  );

  useEffect(() => {
    // @ts-ignore
    window.$_ComponentWrap = wrapProps;
  }, [componentProps]);

  useEffect(() => {
    const renderer = Components?.renderer;
    // @ts-ignore
    window.mountNode = componentRef.current;
    renderer && renderer();
  }, [Components?.renderer, componentProps]);

  return (
    <div className="component-block">
      {Components?.error ? (
        <Result
          status="warning"
          title="Resource load failed"
          subTitle={
            <span style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
              {Components?.error.message}
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
  );
}
