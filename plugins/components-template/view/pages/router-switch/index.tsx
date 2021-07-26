import React from "react";
import "./index.scss";
import { useComponentInfo, useRouteMap } from "../../utils/loaders";
import { Link, useRouteMatch } from "react-router-dom";

// @ts-ignore
const { Menu } = window.antd;

const { SubMenu } = Menu;

function MenuLink(item) {
  return (
    <Link to={item.path}>
      {item.name.replace(/-/g, " ").replace(/\//g, " - ")}
    </Link>
  );
}

export default function RouterSwitch() {
  const { tree: menuData } = useRouteMap() || {};

  const { npmLink, logo } = useComponentInfo() || ({} as any);

  if (!menuData || menuData?.length <= 1) {
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
              <Menu.Item key={item.path}>
                <MenuLink {...item} />
              </Menu.Item>
            );
          }
          return (
            <SubMenu title={item.name} className="capitalize" key={item.name}>
              {item.children?.map((item) => (
                <Menu.Item key={item.path}>
                  <MenuLink {...item} />
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
    </Menu>
  );
}
