import React, { useCallback, useEffect, useRef, useState } from "react";
import { useComponents, useMarkdown } from "../../utils/loaders";

const { Tabs } = window["antd"];

const { TabPane } = Tabs;

export function ComponentArea(props) {
  const { componentProps, onSwitch = () => {}, onSetDefaultProps } = props;
  const componentRef = useRef() as any;

  const Components: any = useMarkdown();

  if (Components) {
    // return null;
  }

  useEffect(() => {
    const renderer = Components?.renderer;
    // @ts-ignore
    window.mountNode = componentRef.current;
    renderer?.();
  }, [Components?.renderer]);

  return (
    <div className="component-block">
      <div className="component-container code-box-demo" ref={componentRef} />
      {/*{keys.length ? (*/}
      {/*  <Tabs tabPosition="bottom" size="small" onChange={setTab}>*/}
      {/*    {keys.map((key) => (*/}
      {/*      <TabPane tab={key} key={key} />*/}
      {/*    ))}*/}
      {/*  </Tabs>*/}
      {/*) : null}*/}
    </div>
  );
}
