import Properties from "../../components/property";
import VisionPane from "../../components/vision-pane/vision-pane";
// import { DevDescription } from "./dev-desc";
import React, { useState } from "react";

import "./index.scss";
import { ComponentArea } from "../../components/component-area";
import {
  RendererContext,
  useComponentInfo,
  useTypeFile,
} from "../../utils/loaders";
import { MarkdownArea } from "../../components/markdown-area";

export default function ReadmePane() {
  const [visionProps, setVisionProps] = useState({});
  const [visionDefaultProps, setVisionDefaultProps] = useState();

  const propertyTypes = useTypeFile();
  const compInfo = useComponentInfo();

  const [renderIndex, setRenderIndex] = useState<number>();

  return (
    <div id="public-component-show-container">
      <RendererContext.Provider value={{ renderIndex, setRenderIndex }}>
        <div className="component-page">
          <h1 className="component-name">{propertyTypes?.displayName}</h1>
          <span className="component-sub-title">
            <span>Package: {compInfo?.packageName}</span>
            <span>Version: {compInfo?.packageVersion}</span>
          </span>
          <div className="component-main">
            <div className="component-part">
              <ComponentArea
                componentProps={visionProps}
                onSetDefaultProps={setVisionDefaultProps}
              />
              <div className="component-description component-block ">
                <MarkdownArea />
                {/*<Usage*/}
                {/*  prefix={tabKey}*/}
                {/*  componentProps={Object.assign(*/}
                {/*    {},*/}
                {/*    visionDefaultProps,*/}
                {/*    visionProps*/}
                {/*  )}*/}
                {/*/>*/}
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
      </RendererContext.Provider>
    </div>
  );
}
