import React, { useEffect, useRef } from "react";
import { useComponents } from "../../utils/loaders";

const { Tabs } = window["antd"];

const { TabPane } = Tabs;

export function ComponentArea(props) {
  const { componentProps = {}, onSwitch = () => {} } = props;
  const componentRef = useRef() as any;

  const Components: any = useComponents();
  const wrapProps = (Component) => (props) => {
    const finalProps = Object.assign({}, props, componentProps);
    return React.createElement(Component, finalProps);
  };

  useEffect(() => {
    if (!Components) {
      return;
    }
    const [Comp, DocsFn] = Components;

    const wrapComponent = Object.assign(wrapProps(Comp), Comp);

    DocsFn(wrapComponent, componentRef.current);
  }, [Components]);

  const [, DocsFns] = Components || [];

  const keys = Object.keys(DocsFns || []);

  return (
    <div className="component-block">
      <div className="component-container code-box-demo" ref={componentRef} />
      {keys.length ? (
        <Tabs tabPosition="bottom" size="small" onChange={onSwitch}>
          {keys.map((key) => (
            <TabPane tab={key} key={key} />
          ))}
        </Tabs>
      ) : null}
    </div>
  );
}
