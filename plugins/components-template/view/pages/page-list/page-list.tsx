import * as React from "react";

declare const window: any;

const { Layout, Input, Empty, PageHeader, Row, Col } = window.antd;
const { Header, Content, Footer } = Layout;

const { Search } = Input;

import "./index.scss";
import { ComponentItem, IComponentItemProps } from "./component-item";
import { useState } from "react";
import lscWindowConfig from "../../utils/lscConfig";
import { NPM_HOST } from "../../constants";

const { LibraryName } = lscWindowConfig;
const Components = window[LibraryName];

export default function PageList() {
  const [searchValue, setSearchValue] = useState("");

  const componentInfo: IComponentItemProps[] = Object.entries(Components)
    .map(([, item]: any) => {
      const docgenInfo = item.__docgenInfo || {};
      const docsPath = item.__docsPath;
      const previewPath = item.__previewPath;
      const href = docsPath && docsPath.replace(/js$/, "html");
      return {
        component: item,
        docsPath,
        href,
        preview: previewPath,
        title: item.displayName,
        description: docgenInfo.description || "",
        author: docgenInfo.author,
        workNo: docgenInfo.workNo,
        category: docgenInfo.category,
        updateTime: docgenInfo.mtime
      };
    })
    .filter(({ title }) => !!title);

  const componentCount = componentInfo.length;
  const componentListData = componentInfo
    // search
    .filter(({ title = "" }) =>
      title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => {
      if (!b.updateTime) {
        return -999999999999;
      }
      return b.updateTime - a.updateTime;
    })
    .sort((a, b) => {
      return +!!b.docsPath - +!!a.docsPath;
    })
    // category
    .reduce(
      (previousValue, currentValue) => {
        const { category = "" } = currentValue;
        if (!previousValue[category]) {
          previousValue[category] = [];
        }
        previousValue[category].push(currentValue);

        return previousValue;
      },
      { "": [] } as Record<string, IComponentItemProps[]>
    );

  // put in the end
  const noneComponents = componentListData[""];
  delete componentListData[""];
  componentListData[""] = noneComponents;

  return (
    <div id="__lsc-comp-page-list">
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img
              src="https://img.alicdn.com/tfs/TB1Zs2ouQL0gK0jSZFAXXcA9pXa-1142-200.png"
              style={{ width: 178, height: 31 }}
            />
          </div>
          <div className="search-nav">
            <Search
              onSearch={setSearchValue}
              placeholder="输入组件关键字搜索"
            />
          </div>
          <PageHeader subTitle={`共 ${componentCount} 个组件`} />
          <div className="blank-area" />
          <a
            className="package-info"
            target="_blank"
            href={`${NPM_HOST}${lscWindowConfig.packageName}`}
          >
            <h2 className="pkg-title">{lscWindowConfig.packageName}</h2>
            <span className="pkg-version">
              {lscWindowConfig.packageVersion}
            </span>
          </a>
        </Header>
        <Content className="code-box-demo">
          {Object.keys(componentListData).length ? (
            Object.entries(componentListData).map(
              (
                [title, components]: [string, IComponentItemProps[]],
                categoryIndex
              ) => {
                return (
                  <>
                    {title ? <PageHeader title={title} /> : null}
                    <div className="component-list">
                      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {components.map((data, index) => (
                          <Col sm={12} lg={8} xl={6} xxl={4}>
                            <ComponentItem
                              {...data}
                              key={`${categoryIndex}_${index}_${data.title}`}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </>
                );
              }
            )
          ) : (
            <Empty description="未匹配到相关组件" />
          )}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © 2020 Alibaba International Front-End
        </Footer>
      </Layout>
    </div>
  );
}
