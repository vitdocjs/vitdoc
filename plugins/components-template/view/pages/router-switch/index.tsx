import React from "react";
import "./index.scss";
import { useComponentInfo, useRouteMap } from "../../utils/loaders";
import { Link, useRouteMatch } from "react-router-dom";
import { LinkCopy } from "../../components/link-copy";

// @ts-ignore
const { Menu } = window.antd;

const { SubMenu } = Menu;

function MenuLink(item) {
  return (
    <div className="nav-menu-link-item">
      <Link to={item.path}>
        <span style={{ flex: 1 }}>
          {item.name
            .replace(/-/g, " ")
            .replace(/\//g, " - ")
            .replace(/^[a-z] /, "")}
        </span>
      </Link>
      <LinkCopy route={item.path} />
    </div>
  );
}

export default function RouterSwitch() {
  const { tree: menuData, routes } = useRouteMap() || {};

  const { npmLink, logo } = useComponentInfo() || ({} as any);

  if (!routes || routes?.length <= 1) {
    return <></>;
  }

  const { url: route } = useRouteMatch();

  const openKeys = menuData
    ?.filter(({ children }) => !!children)
    .map(({ name }) => name);

  return (
    <Menu
      mode="inline"
      className="router-switch"
      defaultSelectedKeys={[route]}
      defaultOpenKeys={openKeys}
    >
      <a className="logo" href={npmLink}>
        <img
          src={
            logo ||
            "https://img.alicdn.com/tfs/TB1Zs2ouQL0gK0jSZFAXXcA9pXa-1142-200.png"
          }
          style={{ width: 178, height: 31 }}
        />
      </a>

      {menuData &&
        menuData.map((item) => {
          if (item.path) {
            return (
              <Menu.Item className="capitalize nav-item-link" key={item.path}>
                <MenuLink {...item} />
              </Menu.Item>
            );
          }
          return (
            <SubMenu title={item.name} className="capitalize" key={item.name}>
              {item.children?.map((item) => (
                <Menu.Item className="nav-item-link" key={item.path}>
                  <MenuLink {...item} />
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
    </Menu>
  );
}
