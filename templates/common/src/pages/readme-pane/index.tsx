import React from "react";

import "./index.scss";
import {
  useComponentInfo,
  useMarkdown,
  useRoute,
  useRouteMap,
} from "../../utils/loaders";
import { MarkdownArea } from "../../components/markdown-area";
import { useUnmount } from "ahooks";
import { propertiesPropsStore, propertiesStore } from "../../store";
import { useSetAtom } from "jotai";
import PropertyPane from "../../components/property-pane/property-pane";
import { PageContainer } from "@ant-design/pro-layout";
import { LinkCopy } from "../../components/link-copy";
import { Typography } from "antd";

const { Text } = Typography;

export default function ReadmePane() {
  const { route } = useRoute();

  const Components = useMarkdown();

  const setProperties = useSetAtom(propertiesStore);
  const setDefaultProps = useSetAtom(propertiesPropsStore);
  useUnmount(() => {
    setProperties({});
    setDefaultProps({
      current: undefined,
      defaultProps: {},
      props: {},
    });
  });

  const compInfo = useComponentInfo();

  const { flattenRoutes = [] } = useRouteMap() || {};

  const currentRoute = flattenRoutes.find(({ path }) => path === route);

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
                <MarkdownArea data={Components} />
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
