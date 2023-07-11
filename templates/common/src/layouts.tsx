import { ProLayout } from "@ant-design/pro-layout";
import { LinkCopy, useNavigate, useRouteMap } from "@vitdoc/ui";
import { useBoolean } from "ahooks";
import classNames from "classnames";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ReadmePane from "./pages/readme-pane";

import "./global.scss";

export function GlobalLayout() {
  const { tree: menuData, routes } = useRouteMap() || {};

  menuData?.forEach((item) => (item.icon = <span>📦</span>));

  const push = useNavigate();

  const [collapsed, { toggle }] = useBoolean(false);

  const { pathname } = useLocation();

  if (!routes) {
    return null;
  }

  return (
    <ProLayout
      siderMenuType="group"
      title={false}
      hide={routes.length < 2}
      collapsed={collapsed}
      onCollapse={toggle}
      breakpoint="lg"
      location={{ pathname }}
      className={classNames(
        "vitdoc-layout",
        collapsed && "vitdoc-layout-collapsed"
      )}
      logo={
        <img
          alt="Vite Docs"
          onClick={() => push("/")}
          src={
            // @ts-ignore
            window.pageConfig?.logo || "//vitdocjs.github.io/logo-with-word.svg"
          }
          style={{ minHeight: 30 }}
        />
      }
      route={{ routes: menuData }}
      pageTitleRender={(props, defaultPageTitle) => {
        return `${defaultPageTitle} - Vitdoc`;
      }}
      menu={{
        defaultOpenAll: true,
        hideMenuWhenCollapsed: true,
        ignoreFlatMenu: true,
      }}
      menuItemRender={(item, dom, { collapsed }) => {
        if (collapsed) {
          return "";
        }

        return (
          <div onClick={() => push(item.path!)}>
            <LinkCopy route={item.path}>{item.name}</LinkCopy>
          </div>
        );
      }}
    >
      <Outlet />
    </ProLayout>
  );
}

export function DocLayout() {
  const { pathname } = useLocation();
  return <ReadmePane key={pathname} />;
}
