import React, { useRef } from "react";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import CloseOutlined from "@ant-design/icons/CloseOutlined";
import { PANE_VISIBLE } from "../../constants";
import { Stage } from "./stage";
import { useLocalStorageState, useRequest, useUpdateEffect } from "ahooks";
import BugOutlined from "@ant-design/icons/BugOutlined";
import { buildVisionFromTypes } from "./convert/typefile";

import "./index.scss";

// @ts-ignore
const { Button, Anchor } = window.antd;

export default function VisionPane({
  properties,
  defaultProps,
  onPropsChange,
}) {
  const [propertyDrawerShow, setPropertyDrawerShow] = useLocalStorageState(
    PANE_VISIBLE,
    ""
  );

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

  return (
    <div className="vision-property-container">
      {propertyDrawerShow && prototypeOptions ? (
        <Anchor offsetTop={20} style={{ backgroundColor: "unset" }}>
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
        </Anchor>
      ) : (
        <div
          className="icon-vision-property-show"
          onClick={() => setPropertyDrawerShow("1")}
        >
          <Button>
            <DoubleLeftOutlined />
            Debug Panel
          </Button>
        </div>
      )}
    </div>
  );
}
