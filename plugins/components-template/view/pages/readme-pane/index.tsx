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
            <h1 className="component-name">
              {propertyTypes?.displayName || compInfo?.packageName}
              <LinkCopy route={route} />
            </h1>
            <span className="component-sub-title">
              <span>Package: {compInfo?.packageName}</span>
              <span>Version: {compInfo?.packageVersion}</span>
            </span>
          </a>
          <div className="component-main">
            <div className="component-part">
              <div className="component-description">
                <ComponentPropsContext.Provider
                  value={{
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
