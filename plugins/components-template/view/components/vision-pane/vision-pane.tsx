import { getVisionConfig } from "./getVisionConfig";
import { transform } from "./convert";

import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import CloseOutlined from "@ant-design/icons/CloseOutlined";

import "./index.scss";
import { PANE_VISIBLE } from "../../constants";

import React from "react";

// @ts-ignore
const { Bundle, Node, ui } = window.VisualEngine;

// @ts-ignore
const { Button, Anchor } = window.antd;

export default class VisionPane extends React.PureComponent<{
  componentName?: string;
  properties: any;
  defaultProps?: Record<string, any>;
  onPropsChange?: (props: Record<string, any>) => void;
}> {
  state = {
    propertyDrawerShow: false,
    prototypeOptions: null as any,
  };
  private prototype: any;
  private disposeArr: any;
  private visionNode: any;

  constructor(props) {
    super(props);
    // @ts-ignore
    const localStoryValue = +localStorage.getItem(PANE_VISIBLE);
    this.state.propertyDrawerShow =
      localStoryValue !== undefined ? !!localStoryValue : true;
    this.init();
  }

  init() {
    const props = this.props;
    getVisionConfig(props.properties).then((prototypeOptions) => {
      // console.log("typeFile:", this.props.properties);
      //
      // console.log("vision config:", prototypeOptions);

      this.prototype = Bundle.createPrototype(transform(prototypeOptions));

      this.visionNode = new Node(null, this.prototype);

      const props = this.visionNode.getProps();
      this.props.defaultProps &&
        Object.entries(this.props.defaultProps).forEach(([key, value]) =>
          props.setPropValue(key, value)
        );
      const propItems = props.getRealItems();

      this.setState({ prototypeOptions });

      const changedData = {};
      this.disposeArr = propItems.map((item) =>
        item.onValueChange(() => {
          changedData[item.getKey()] = item.getValue();
          this.props.onPropsChange &&
            this.props.onPropsChange(Object.assign({}, changedData));
        })
      );
    });
  }

  componentDidUpdate(
    prevProps: Readonly<{
      componentName?: string;
      properties: any;
      defaultProps?: Record<string, any>;
      onPropsChange?: (props: Record<string, any>) => void;
    }>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (prevProps.properties !== this.props.properties) {
      this.disposeArr && this.disposeArr.forEach((dispose) => dispose());
      this.init();
    }
    if (prevProps.defaultProps !== this.props.defaultProps) {
      this.setPropertyDrawerShow(true);
      this.init();
    }
  }

  setPropertyDrawerShow = (visible) => {
    localStorage.setItem(PANE_VISIBLE, `${+visible}`);
    this.setState({ propertyDrawerShow: visible });
  };

  componentWillUnmount() {
    this.disposeArr && this.disposeArr.forEach((dispose) => dispose());
  }

  render() {
    const { propertyDrawerShow, prototypeOptions } = this.state;
    const { properties } = this.props;

    if (!properties || !prototypeOptions) {
      return null;
    }
    const node = this.visionNode;
    const props = node.getProps();

    const stage = props.stage;
    const icon = node.getIcon();

    const title = prototypeOptions.title;

    const { Stage } = ui.Field as any;

    return stage ? (
      <div className="vision-property-container">
        {propertyDrawerShow && Object.keys(prototypeOptions) ? (
          <Anchor offsetTop={20} style={{ backgroundColor: "unset" }}>
            <div className="ant-drawer-wrapper-body ">
              <div className="component-block">
                <div className="ant-drawer-header">
                  <div className="ant-drawer-title">
                    <img className="vision-title-icon" src={icon} alt="" />
                    {title || "Debug Panel"}
                  </div>
                  <button
                    aria-label="Close"
                    className="ant-drawer-close"
                    onClick={() => this.setPropertyDrawerShow(false)}
                  >
                    <CloseOutlined />
                  </button>
                </div>
                <div className="ant-drawer-body">
                  <Stage stage={stage} />
                </div>
              </div>
            </div>
          </Anchor>
        ) : (
          <div
            className="icon-vision-property-show"
            onClick={() => this.setPropertyDrawerShow(true)}
          >
            <Button>
              <DoubleLeftOutlined />
              Debug Panel
            </Button>
          </div>
        )}
      </div>
    ) : null;
  }
}
