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
import { Button, Affix, Card, Space } from "antd";

import "./index.scss";

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
          <Card
            className="vitdoc-debug-panel"
            title={
              <Space>
                <BugOutlined className="code-box-code-action" />
                Try to play
              </Space>
            }
            extra={
              <Button
                type="text"
                size="small"
                aria-label="Close"
                onClick={() => setPropertyDrawerShow("")}
              >
                <CloseOutlined />
              </Button>
            }
          >
            <Stage
              {...prototypeOptions}
              initialValues={defaultProps}
              onValuesChange={onPropsChange}
            />
          </Card>
        </Affix>
      ) : (
        <Affix offsetTop={20} className="icon-vision-property-show">
          <Button onClick={() => setPropertyDrawerShow("1")}>
            <DoubleLeftOutlined />
            Try to play
          </Button>
        </Affix>
      )}
    </div>
  );
}
