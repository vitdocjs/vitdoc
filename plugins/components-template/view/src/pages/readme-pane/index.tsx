import React from "react";

import "./index.scss";
import { useMarkdown, useRoute } from "../../utils/loaders";
import { MarkdownArea } from "../../components/markdown-area";
import { PageTitle } from "./page-title";
import { useUnmount } from "ahooks";
import { propertiesPropsStore, propertiesStore } from "../../store";
import { useSetAtom } from "jotai";
import PropertyPane from "../../components/property-pane/property-pane";

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

  return (
    <div id="public-component-show-container">
      {Components ? (
        <div className="component-page">
          <PageTitle route={route} />
          <div className="component-main">
            <div className="component-part">
              <div className="component-description">
                <MarkdownArea data={Components} />
              </div>
            </div>
            <PropertyPane />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
