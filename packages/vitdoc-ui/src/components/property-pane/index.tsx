import React, { useRef } from "react";
import {
  DoubleLeftOutlined,
  CloseOutlined,
  BugOutlined,
} from "@ant-design/icons";
import { PANE_VISIBLE } from "../../constants";
import { Stage } from "./stage";
import {
  useLocalStorageState,
  useMemoizedFn,
  useRequest,
  useUpdateEffect,
} from "ahooks";
import { buildVisionFromTypes } from "./convert/typefile";
import {
  propertiesPropsStore,
  propertiesStore as propStore,
} from "../../store";
import { useAtom } from "jotai";
import { Button, Affix, Card, Space } from "antd";

import "./index.scss";

export function PropertyPane() {
  const [properties] = useAtom(propStore);
  const [propertyDrawerShow, setPropertyDrawerShow] = useLocalStorageState(
    PANE_VISIBLE,
    {}
  );

  const [storeProps, setStore] = useAtom(propertiesPropsStore);
  const { current, defaultProps } = storeProps;

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
    () => buildVisionFromTypes(properties),
    {
      refreshDeps: [properties],
    }
  );

  useUpdateEffect(() => {
    !!current && setPropertyDrawerShow("1");
  }, [current]);

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
              {...(prototypeOptions as any)}
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
