// @ts-ignore
const { Table } = window.antd;
import React from "react";

export default function renderProperty({ properties }) {
  const { props = {} } = properties;

  const dateSource = (Object.values(props) as any).map((val) => {
    if (!!val.defaultValue) {
      val.defaultValue.value = `${val.defaultValue.value}`;
    }

    return val;
  });

  return (
    <Table
      scroll={{ x: "100%" }}
      dataSource={dateSource}
      pagination={false}
      bordered
    >
      <Table.Column dataIndex="name" title="Property" />
      <Table.Column dataIndex="description" title="Description" />
      <Table.Column dataIndex={["type", "name"]} title="Type" />
      <Table.Column dataIndex={["defaultValue", "value"]} title="Default" />
    </Table>
  );
}
