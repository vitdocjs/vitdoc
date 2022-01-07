import React, { useEffect } from "react";
import { SetterFormItem } from "./setters/form";

// @ts-ignore
const { List, Form } = window.antd;

export function Stage({
  componentName,
  configure,
  initialValues,
  onValuesChange,
}) {
  const [form] = Form.useForm();
  useEffect(() => {
    initialValues && form.setFieldsValue(initialValues);
  }, [initialValues]);

  return (
    <Form form={form} onValuesChange={onValuesChange}>
      <List
        className="pane-stage"
        dataSource={configure}
        renderItem={(item) => {
          return <SetterFormItem {...item} />;
        }}
      />
    </Form>
  );
}
