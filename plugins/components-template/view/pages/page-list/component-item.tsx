import * as React from "react";
import RequireJS from "../../utils/RequireJS";
// @ts-ignore
import dayjs from "dayjs";
// @ts-ignore
import relativeTime from "dayjs/plugin/relativeTime";
import { buildDocsRef } from "../../utils/renderDocs";
import { getDocsRender } from "../../../libs/utils/getDocsRender";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";

import Image from "@alife/intl-comp-image";

dayjs.extend(relativeTime);

declare const window: any;

const { Avatar, Empty } = window.antd;

export interface IComponentItemProps {
  component?: React.Component;
  href?: string;
  title?: string;
  docsPath?: string;
  description?: string;
  preview?: string;
  author?: string;
  workNo?: string;
  category?: string;
  updateTime?: number;
  componentSize?: string;
}

export class ComponentItem extends React.Component<IComponentItemProps> {
  private getRef: (ref) => void;

  state = {
    scaleRate: 1
  };

  constructor(props) {
    super(props);
    this.buildPreview();
  }

  private buildPreview() {
    const { component } = this.props;
    // @ts-ignore
    const docsPath = component.__docsPath;

    if (docsPath) {
      const docsFile = new URL(
        (/^http/.test(docsPath) ? "" : window.location.origin) + docsPath
      );

      this.getRef = buildDocsRef(
        async () => {
          const DocsModule = await RequireJS.load(docsFile.href);

          // maybe a multiple docs
          const Docs = getDocsRender(DocsModule);

          return { Component: component, Docs };
        },
        dom => {
          const {
            clientWidth: pWidth,
            clientHeight: pHeight
          } = dom.parentElement;
          const { clientHeight, clientWidth } = dom;
          const widthRate = (pWidth - 10) / clientWidth;
          const heightRate = (pHeight - 10) / clientHeight;
          const rate = Math.min(heightRate, widthRate, 1);
          this.setState({ scaleRate: rate });
        }
      );
    }
  }

  render() {
    const {
      title,
      href = "#",
      description,
      author = "unknown author",
      preview,
      workNo,
      updateTime
    } = this.props;

    const { scaleRate } = this.state;

    return (
      <a className="component-item" href={href}>
        <div className="component-preview">
          {preview ? (
            <Image src={preview} maxWidth={300} maxHeight={200} mode={"aspectFit"} />
          ) : (
            <div
              className="comp-area"
              style={{ transform: `scale(${scaleRate})` }}
              ref={this.getRef}
            >
              <Empty description={false} />
            </div>
          )}
          <Avatar
            size={46}
            src={
              workNo &&
              `https://work.alibaba-inc.com/photo/${workNo}.240x240xz.jpg`
            }
          >
            {author.replace(/[\.| ].+/, "")}
          </Avatar>
        </div>
        <div className="component-info">
          <section>
            <div className="title-part">
              <h3 className="component-name"> {title} </h3>
              <h4 className="component-author">{author}</h4>
            </div>
            <div className="component-description">
              {description.trim() || (
                <span style={{ color: "#ccc" }}>No description</span>
              )}
            </div>
          </section>
          <div className="component-tags">
            <span className="component-size">
              <ClockCircleOutlined />
              {dayjs().to(updateTime)}
            </span>
          </div>
        </div>
      </a>
    );
  }
}
