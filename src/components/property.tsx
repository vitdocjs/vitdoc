// @ts-ignore
const { Table } = window.antd;
import React from "react";


export default function renderProperty({ properties }) {
  if (!properties) {
    return null;
  }
  const { props = {} } = properties;

  const dateSource = (Object.values(props) as any).map((val) => {
    if (!!val.defaultValue) {
      val.defaultValue.value = `${val.defaultValue.value}`;
    }

    return val;
  });

  return (
    <React.Fragment>
      <b className="block-title">Props</b>
      <Table dataSource={dateSource}>
        <Table.Column dataIndex="name" title="property" />
        <Table.Column dataIndex={["type", "name"]} title="propType" />
        <Table.Column dataIndex={["defaultValue", "value"]} title="default" />
        <Table.Column dataIndex="description" title="description" />
      </Table>
    </React.Fragment>
  );
}
