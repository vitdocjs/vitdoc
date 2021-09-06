import Properties from "../../components/property";
import VisionPane from "../../components/vision-pane/vision-pane";
import React, { useState } from "react";

import "./index.scss";
import { ComponentArea } from "../../components/component-area";
import {
  useComponentInfo,
  useMarkdown,
  useTypeFile,
} from "../../utils/loaders";
import { MarkdownArea } from "../../components/markdown-area";

export default function ReadmePane() {
  const [visionProps, setVisionProps] = useState({});
  const [visionDefaultProps, setVisionDefaultProps] = useState();

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
            </h1>
            <span className="component-sub-title">
              <span>Package: {compInfo?.packageName}</span>
              <span>Version: {compInfo?.packageVersion}</span>
            </span>
          </a>
          <div className="component-main">
            <div className="component-part">
              {Components.renderer && (
                <ComponentArea
                  data={Components}
                  componentProps={visionProps}
                  onSetDefaultProps={setVisionDefaultProps}
                />
              )}
              <div className="component-description component-block">
                <MarkdownArea data={Components} />
                <Properties properties={propertyTypes} />
              </div>
            </div>
            {propertyTypes && (
              <VisionPane
                key={`vision-default-props-${!!visionDefaultProps}`}
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
