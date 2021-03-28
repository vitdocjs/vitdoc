import React, { useCallback, useEffect, useRef } from "react";
import { useMarkdown } from "../../utils/loaders";

import "./index.scss";

export function ComponentArea(props) {
  const { componentProps, onSetDefaultProps } = props;
  const componentRef = useRef() as any;

  const Components: any = useMarkdown();

  const invoked = useRef(false);

  const wrapProps = useCallback(
    (Component) => (props) => {
      if (!invoked.current) {
        onSetDefaultProps && onSetDefaultProps(props);
        invoked.current = true;
      }
      const finalProps = Object.assign({}, props, componentProps);
      return React.createElement(Component, finalProps);
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
    renderer?.();
  }, [Components?.renderer, componentProps]);

  return (
    <div className="component-block">
      <div className="component-container code-box-demo" ref={componentRef} />
    </div>
  );
}
