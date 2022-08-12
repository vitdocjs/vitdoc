import React, { useEffect } from "react";
import { SetterFormItem } from "./setters/form";
import { useCreation } from "ahooks";

// @ts-ignore
const { List, Form } = window.antd;

export function Stage({
  componentName,
  configure,
  initialValues,
  onValuesChange,
}) {
  const [form] = Form.useForm();

  const propertyDefaultValues = useCreation(
    () =>
      configure.reduce((prev, { name, defaultValue }) => {
        defaultValue !== undefined &&
          Object.assign(prev, { [name]: defaultValue });

        return prev;
      }, {}),
    [configure]
  );

  useEffect(() => {
    form.setFieldsValue({
      ...propertyDefaultValues,
      ...initialValues,
    });
  }, [initialValues, propertyDefaultValues]);

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
