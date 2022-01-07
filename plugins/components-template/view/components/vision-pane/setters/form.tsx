import React from "react";
import "./form.scss";
import classNames from "classnames";
import { Setters } from "./setters";

// @ts-ignore
const { List, Tooltip, Form } = window.antd;

export function SetterFormItem({ name, tip, defaultValue, setter, ...rest }) {
  const Setter = Setters[setter];

  return (
    <List.Item className="setter-form-item">
      <div className="setter-form-item-label">
        <Tooltip className={classNames(!!tip && "has-tip")} title={tip}>
          {name}
        </Tooltip>
      </div>
      <div className="setter-form-item-value">
        {Setter && (
          <Form.Item
            name={name}
            initialValue={defaultValue}
            style={{ marginBottom: 0 }}
          >
            <Setter {...rest} />
          </Form.Item>
        )}
      </div>
    </List.Item>
  );
}
