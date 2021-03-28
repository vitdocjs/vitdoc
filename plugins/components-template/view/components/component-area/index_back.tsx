import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useComponents } from "../../utils/loaders";

const { Tabs } = window["antd"];

const { TabPane } = Tabs;

export function ComponentArea(props) {
  const { componentProps, onSwitch = () => {}, onSetDefaultProps } = props;
  const componentRef = useRef() as any;

  const Components: any = useComponents();

  const wrapProps = useCallback(
    (Component) => (props) => {
      const finalProps = Object.assign({}, props, componentProps);
      return React.createElement(Component, finalProps);
    },
    [componentProps]
  );

  const [, DocsFns] = Components || [];

  const keys = Object.keys(DocsFns || []);
  const [tabIndex, setTabIndex] = useState<string>();

  useEffect(() => {
    if (!Components) {
      return;
    }
    const [Comp, DocsFn] = Components;

    const Component = (props) => {
      useEffect(() => {
        onSetDefaultProps && onSetDefaultProps(props);
      }, []);
      return React.createElement(Comp, props);
    };
    // @ts-ignore

    // window.$RefreshReg$ && window.$RefreshReg$(Comp, "Image");

    const isMultiple = typeof DocsFn === "object";

    const wrapComponent = Object.assign(wrapProps(Component), Comp);

    let DocsRender = DocsFn;
    if (isMultiple) {
      const DocsKey =
        tabIndex === undefined ? Object.keys(DocsFn)[0] : tabIndex;
      DocsRender = isMultiple ? DocsFn[DocsKey] : DocsFn;
    }

    DocsRender(wrapComponent, componentRef.current);
  }, [Components, componentProps, tabIndex]);

  const setTab = (val) => {
    setTabIndex(val);
    onSwitch(val);
  };

  return (
    <div className="component-block">
      <div className="component-container code-box-demo" ref={componentRef} />
      {keys.length ? (
        <Tabs tabPosition="bottom" size="small" onChange={setTab}>
          {keys.map((key) => (
            <TabPane tab={key} key={key} />
          ))}
        </Tabs>
      ) : null}
    </div>
  );
}
