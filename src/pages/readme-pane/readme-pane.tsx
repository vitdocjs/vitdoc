import Properties from "../../components/property";
import VisionPane from "../../components/vision-pane/vision-pane";
import keyBy from "lodash/keyBy";
import lscWindowConfig from "../../utils/lscConfig";
import RouteMap from "../../utils/routeMap";
// import { DevDescription } from "./dev-desc";
import { useRef, useState, useEffect, useCallback } from "react";
import React from "react";

import "./index.scss";
import {ComponentArea} from "../../components/component-area"

declare const window: any;

const { Tabs } = window.antd;

const { TabPane } = Tabs;


const {
  route,
  isLibraryComponent,
  packageName,
  packageVersion,
} = lscWindowConfig;

const ComponentName = isLibraryComponent
  ? RouteMap[route]
  : lscWindowConfig.LibraryName;

// const DocsRenders =
// @ts-ignore

export default function ReadmePane() {

  const [visionProps, setVisionProps] = useState({});
  const [propertyTypes, setPropertyTypes] = useState();
  const [visionDefaultProps, setVisionDefaultProps] = useState();


  const getProperties = useCallback(async () => {
    const { default: properties } = await import(
      /* @vite-ignore */
      `${route}/index.tsx.type.json`
    );

    const { default: compProps } = keyBy(properties, "exportName");

    setPropertyTypes(compProps);
  }, []);


  useEffect(() => {
    getProperties();
  }, []);


  // const onSwitchCase = (activeKey) => {
  //   setTabIndex(activeKey);
  //   setVisionProps({});
  //   setVisionDefaultProps({});
  // };

  return (
    <div id="public-component-show-container">
      <div className="component-page">
        <h1 className="component-name">{ComponentName}</h1>
        <span className="component-sub-title">
          <span>Package: {packageName}</span>
          <span>Version: {packageVersion}</span>
        </span>
        <div className="component-main">
          <div className="component-part">
            <ComponentArea componentProps={visionProps} />
            <div className="component-description component-block ">
              {/*{DocsRender && (*/}
              {/*  <Usage*/}
              {/*    key={new Date().valueOf()}*/}
              {/*    packageName={packageName}*/}
              {/*    isLibraryComponent={isLibraryComponent}*/}
              {/*    componentName={ComponentName}*/}
              {/*    componentProps={Object.assign(*/}
              {/*      {},*/}
              {/*      visionDefaultProps,*/}
              {/*      visionProps*/}
              {/*    )}*/}
              {/*    docsRender={DocsRender}*/}
              {/*  />*/}
              {/*)}*/}
              <Properties properties={propertyTypes} />
            </div>
          </div>
          {propertyTypes && visionDefaultProps && (
            <VisionPane
              // key={visionRenderTab}
              componentName={""}
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
