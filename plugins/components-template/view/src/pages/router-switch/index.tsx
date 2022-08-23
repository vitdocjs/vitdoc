import React from "react";
import "./index.scss";
import { useComponentInfo, useRouteMap } from "../../utils/loaders";
import { Link, useRouteMatch } from "react-router-dom";
import { LinkCopy } from "../../components/link-copy";
import { useBoolean, useUpdateEffect } from "ahooks";
import classNames from "classnames";

import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";
import { toName } from "../../utils";

// @ts-ignore
import {  Menu, Button  } from "antd";

const { SubMenu } = Menu;

function MenuLink(item) {
  return (
    <div className="nav-menu-link-item">
      <Link to={item.path}>
        <span style={{ flex: 1 }}>{toName(item.name)}</span>
      </Link>
      <LinkCopy route={item.path} />
    </div>
  );
}

export default function RouterSwitch() {
  const { tree: menuData, routes } = useRouteMap() || {};

  const { npmLink, logo } = useComponentInfo() || ({} as any);

  const [showMenu, { toggle, setFalse }] = useBoolean(false);

  const { url: route } = useRouteMatch();

  useUpdateEffect(() => {
    setFalse();
  }, [route]);

  if (!routes || routes?.length <= 1) {
    return <></>;
  }

  const openKeys = menuData
    ?.filter(({ children }) => !!children)
    .map(({ name }) => name);

  return (
    <>
      <div className="route-switch-placeholder" />
      <div
        className={classNames(
          "route-switch-scope",
          showMenu && "router-switch-open"
        )}
      >
        <a className="logo" href={npmLink}>
          <img
            alt="Vite Docs"
            src={
              logo ||
              "//img.alicdn.com/imgextra/i4/O1CN01U2BRev1JttIZWA0JX_!!6000000001087-55-tps-771-237.svg"
            }
            style={{ width: 160 }}
          />
        </a>

        <Button className="responsive-btn" onClick={() => toggle()}>
          {showMenu ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
        </Button>
        <Menu
          mode="inline"
          className="router-switch"
          defaultSelectedKeys={[route]}
          defaultOpenKeys={openKeys}
        >
          {menuData &&
            menuData.map((item) => {
              if (item.path) {
                return (
                  <Menu.Item
                    className="capitalize nav-item-link"
                    key={item.path}
                  >
                    <MenuLink {...item} />
                  </Menu.Item>
                );
              }
              return (
                <SubMenu
                  title={item.name}
                  className="capitalize"
                  key={item.name}
                >
                  {item.children?.map((item) => (
                    <Menu.Item className="nav-item-link" key={item.path}>
                      <MenuLink {...item} />
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            })}
        </Menu>
      </div>
    </>
  );
}
