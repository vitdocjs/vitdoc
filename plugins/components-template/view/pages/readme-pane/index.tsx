import Properties from "../../components/property";
import VisionPane from "../../components/vision-pane/vision-pane";
import React, { useState } from "react";

import "./index.scss";
import {
  useComponentInfo,
  useMarkdown,
  useRoute,
  useTypeFile,
} from "../../utils/loaders";
import { MarkdownArea } from "../../components/markdown-area";
import { LinkCopy } from "../../components/link-copy";
import { ComponentPropsContext } from "../../context";

const { Typography } = window["antd"];

const { Title, Text } = Typography;

export default function ReadmePane() {
  const [visionProps, setVisionProps] = useState({});
  const [visionDefaultProps, setVisionDefaultProps] = useState();

  const { route } = useRoute();

  const propertyTypes = useTypeFile();

  const compInfo = useComponentInfo();

  const Components = useMarkdown();

  return (
    <div id="public-component-show-container">
      {Components ? (
        <div className="component-page">
          <a href={compInfo?.npmLink} className="link-title">
            <Title level={1} className="component-name">
              {propertyTypes?.displayName || compInfo?.packageName}
              <LinkCopy route={route} />
            </Title>
            <span className="component-sub-title">
              <Text type="secondary">Package: {compInfo?.packageName}</Text>
              <Text type="secondary">Version: {compInfo?.packageVersion}</Text>
            </span>
          </a>
          <div className="component-main">
            <div className="component-part">
              <div className="component-description">
                <ComponentPropsContext.Provider
                  value={{
                    pathHash: Components?.pathHash,
                    error: Components?.error,
                    componentProps: visionProps,
                    onSetDefaultProps: setVisionDefaultProps,
                  }}
                >
                  <MarkdownArea data={Components} />
                </ComponentPropsContext.Provider>
                <Properties properties={propertyTypes} />
              </div>
            </div>
            {propertyTypes && (
              <VisionPane
                key={`vision-default-props`}
                properties={propertyTypes}
                defaultProps={visionDefaultProps}
                onPropsChange={setVisionProps}
              />
            )}
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
