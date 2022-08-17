import React from "react";

// @ts-ignore
import {  Input, Radio, InputNumber, Select, Switch  } from "antd";

export const Setters = {
  NumberSetter: (props) => <InputNumber {...props} style={{ width: 120 }} />,
  TextSetter: (props) => <Input {...props} style={{ width: 120 }} />,
  ChoiceSetter: (props) => (
    <Radio.Group {...props} optionType="button" size="small" />
  ),
  SelectSetter: (props) => (
    <Select {...props} style={{ width: 120 }} allowClear />
  ),
  BoolSetter: (props) => <Switch {...props} checked={props.value} />,
};
