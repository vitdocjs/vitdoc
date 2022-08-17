import React from "react";
import { LinkCopy } from "../../components/link-copy";
import { useComponentInfo, useRouteMap } from "../../utils/loaders";
import { toName } from "../../utils";

import {  Typography  } from "antd";

const { Title, Text } = Typography;

export function PageTitle(props: { route: any }) {
  const compInfo = useComponentInfo();

  const { flattenRoutes = [] } = useRouteMap() || {};

  const route = props.route;
  const currentRoute = flattenRoutes.find(({ path }) => path === route);

  return (
    <a href={compInfo?.npmLink} className="link-title">
      <Title level={1} className="component-name">
        {toName(currentRoute?.name) || compInfo?.packageName}
        <LinkCopy route={props.route} />
      </Title>
      <span className="component-sub-title">
        <Text type="secondary">Package: {compInfo?.packageName}</Text>
        <Text type="secondary">Version: {compInfo?.packageVersion}</Text>
      </span>
    </a>
  );
}
