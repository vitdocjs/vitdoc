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
      <b className="block-title">API</b>
      <Table dataSource={dateSource} pagination={false} bordered>
        <Table.Column dataIndex="name" title="Property" />
        <Table.Column dataIndex="description" title="Description" />
        <Table.Column dataIndex={["type", "name"]} title="Type" />
        <Table.Column dataIndex={["defaultValue", "value"]} title="Default" />
      </Table>
    </React.Fragment>
  );
}
