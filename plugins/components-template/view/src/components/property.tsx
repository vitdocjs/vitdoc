// @ts-ignore
import {  Table  } from "antd";
import React from "react";

export default function renderProperty({ loading = false, properties }) {
  const { props = {} } = properties;

  const dateSource = (Object.values(props) as any).map((val) => {
    if (!!val.defaultValue) {
      val.defaultValue.value = `${val.defaultValue.value}`;
    }

    return val;
  });

  return (
    <Table
      loading={loading}
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
