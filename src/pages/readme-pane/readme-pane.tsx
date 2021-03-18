import Properties from "../../components/property";
import VisionPane from "../../components/vision-pane/vision-pane";
// import { DevDescription } from "./dev-desc";
import React, { useState } from "react";

import "./index.scss";
import { ComponentArea } from "../../components/component-area";
import { useComponentInfo, useTypeFile } from "../../utils/loaders";
import { Usage } from "../../components/usage/usage";

export default function ReadmePane() {
  const [visionProps, setVisionProps] = useState({});
  const [visionDefaultProps, setVisionDefaultProps] = useState();
  const [tabKey, setTabKey] = useState();

  const propertyTypes = useTypeFile();
  const { packageName, packageVersion } = useComponentInfo() || ({} as any);

  console.log("########", packageName);

  return (
    <div id="public-component-show-container">
      <div className="component-page">
        <h1 className="component-name">{propertyTypes?.displayName}</h1>
        <span className="component-sub-title">
          <span>Package: {packageName}</span>
          <span>Version: {packageVersion}</span>
        </span>
        <div className="component-main">
          <div className="component-part">
            <ComponentArea
              onSwitch={setTabKey}
              componentProps={visionProps}
              onSetDefaultProps={setVisionDefaultProps}
            />
            <div className="component-description component-block ">
              <Usage
                prefix={tabKey}
                componentProps={Object.assign(
                  {},
                  visionDefaultProps,
                  visionProps
                )}
              />
              <Properties properties={propertyTypes} />
            </div>
          </div>
          {propertyTypes && visionDefaultProps && (
            <VisionPane
              properties={propertyTypes}
              defaultProps={visionDefaultProps}
              onPropsChange={setVisionProps}
            />
          )}
        </div>
      </div>
    </div>
  );
}
