import React, { useRef } from "react";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import CloseOutlined from "@ant-design/icons/CloseOutlined";
import { PANE_VISIBLE } from "../../constants";
import { Stage } from "./stage";
import {
  useLocalStorageState,
  useMemoizedFn,
  useRequest,
  useUpdateEffect,
} from "ahooks";
import BugOutlined from "@ant-design/icons/BugOutlined";
import { buildVisionFromTypes } from "./convert/typefile";
import {
  propertiesPropsStore,
  propertiesStore as propStore,
} from "../../store";
import { useAtom } from "jotai";

import "./index.scss";

// @ts-ignore
import {  Button, Affix  } from "antd";

export default function PropertyPane() {
  const [properties] = useAtom(propStore);
  const [propertyDrawerShow, setPropertyDrawerShow] = useLocalStorageState(
    PANE_VISIBLE,
    {}
  );

  const [storeProps, setStore] = useAtom(propertiesPropsStore);
  const { defaultProps } = storeProps;

  const onPropsChange = useMemoizedFn((props: any) => {
    setStore({
      ...storeProps,
      props: {
        ...storeProps.props,
        ...props,
      },
    });
  });

  const { data: prototypeOptions } = useRequest(
    async () => {
      return buildVisionFromTypes(properties);
    },
    {
      refreshDeps: [properties],
    }
  );

  const renderIndex = useRef(0);
  useUpdateEffect(() => {
    renderIndex.current++;
    if (renderIndex.current > 1) {
      setPropertyDrawerShow("1");
    }
  }, [defaultProps]);

  if (!Object.keys(properties).length) {
    return null;
  }

  return (
    <div className="vision-property-container">
      {propertyDrawerShow && prototypeOptions ? (
        <Affix offsetTop={20} style={{ backgroundColor: "unset" }}>
          <div className="ant-drawer-wrapper-body ">
            <div className="component-block">
              <div className="ant-drawer-header">
                <div className="ant-drawer-title">
                  <BugOutlined
                    className="code-box-code-action"
                    style={{ marginRight: 8 }}
                  />
                  Debug Panel
                </div>
                <button
                  aria-label="Close"
                  className="ant-drawer-close"
                  onClick={() => setPropertyDrawerShow("")}
                >
                  <CloseOutlined />
                </button>
              </div>
              <div className="ant-drawer-body">
                <Stage
                  {...prototypeOptions}
                  initialValues={defaultProps}
                  onValuesChange={onPropsChange}
                />
              </div>
            </div>
          </div>
        </Affix>
      ) : (
        <Affix
          offsetTop={20}
          className="icon-vision-property-show"
        >
          <Button
            onClick={() => setPropertyDrawerShow("1")}
          >
            <DoubleLeftOutlined />
            Debug Panel
          </Button>
        </Affix>
      )}
    </div>
  );
}
