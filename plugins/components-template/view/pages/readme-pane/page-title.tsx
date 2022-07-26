import React from "react";
import { LinkCopy } from "../../components/link-copy";
import { useComponentInfo } from "../../utils/loaders";
import { useAtom } from "jotai";
import { propertiesStore } from "../../store";

const { Typography } = window["antd"];

const { Title, Text } = Typography;

export function PageTitle(props: { route: any }) {
  const compInfo = useComponentInfo();

  const [propertyTypes] = useAtom(propertiesStore);

  return (
    <a href={compInfo?.npmLink} className="link-title">
      <Title level={1} className="component-name">
        {propertyTypes?.displayName || compInfo?.packageName}
        <LinkCopy route={props.route} />
      </Title>
      <span className="component-sub-title">
        <Text type="secondary">Package: {compInfo?.packageName}</Text>
        <Text type="secondary">Version: {compInfo?.packageVersion}</Text>
      </span>
    </a>
  );
}
