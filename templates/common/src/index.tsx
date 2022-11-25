import { ProLayout } from "@ant-design/pro-layout";
import { useBoolean } from "ahooks";
import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useMatches,
  useNavigate,
} from "react-router-dom";
import ReadmePane from "./pages/readme-pane";
import { LinkCopy, useComponentInfo, useRouteMap } from "@vitdoc/ui";

import "./global.scss";

export function App() {
  const { tree: menuData, routes } = useRouteMap() || {};

  menuData?.forEach((item) => (item.icon = <span>📦</span>));

  const push = useNavigate();

  const { npmLink } = useComponentInfo() || ({} as any);

  const [collapsed, { toggle }] = useBoolean(false);

  const { pathname } = useLocation();
  console.log("🚀 #### ~ App ~ pathname", pathname);

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
        <a className="vitdoc-logo" href={npmLink}>
          <img
            alt="Vite Docs"
            src={
              // @ts-ignore
              window.pageConfig?.logo ||
              "//vitdocjs.github.io/logo-with-word.svg"
            }
            style={{ minHeight: 30 }}
          />
        </a>
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
        return React.cloneElement(dom as any, {
          onClick: () => push(item.path!),
          children: <LinkCopy route={item.path}>{item.name}</LinkCopy>,
        });
      }}
    >
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route}
              element={
                <div style={{ display: "flex" }} className="code-box-demo">
                  <ReadmePane key={`${route}_readme_pane`} />
                </div>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to={routes[0]} replace={true} />} />
      </Routes>
    </ProLayout>
  );
}

export function mount({ container }) {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    container
  );
}

export function unmount({ container }) {
  ReactDOM.unmountComponentAtNode(container);
}
