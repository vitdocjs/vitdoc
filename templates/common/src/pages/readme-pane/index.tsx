import { PageContainer } from "@ant-design/pro-layout";
import { useUnmount } from "ahooks";
import { Typography } from "antd";
import React from "react";
import {
  LinkCopy,
  PropertyPane,
  Store,
  useMarkdown,
  useRoute,
  useRouteMap,
  useComponentInfo,
} from "@vitdoc/ui";
import { Outlet } from "virtual:vitdoc-router";


import "./index.scss";

const { Text } = Typography;

export default function ReadmePane() {
  const { route } = useRoute();

  const Components = useMarkdown();

  const setProperties = Store.useSetProperties();
  const setDefaultProps = Store.useSetDefaultProps();

  useUnmount(() => {
    setProperties({});
    setDefaultProps({
      current: undefined,
      defaultProps: {},
      props: {},
    });
  });

  const { flattenRoutes = [], } = useRouteMap() || {};

  const currentRoute = flattenRoutes.find(({ path }) => path === route);

  const compInfo = currentRoute.packageJsonInfo || useComponentInfo();

  return (
    <div id="public-component-show-container">
      {Components ? (
        <PageContainer
          title={
            <LinkCopy route={route}>
              {currentRoute?.name || compInfo?.packageName}
            </LinkCopy>
          }
          subTitle={
            <a href={compInfo?.npmLink} className="vitdoc-link-title">
              <Text type="secondary">Package: {compInfo?.packageName}</Text>
              <Text type="secondary" style={{ marginLeft: 8 }}>
                Version: {compInfo?.packageVersion}
              </Text>
            </a>
          }
          className="vitdoc-component-page"
        >
          <div className="component-main">
            <div className="component-part">
              <div className="component-description">
                <Outlet />
              </div>
            </div>
            <PropertyPane />
          </div>
        </PageContainer>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
