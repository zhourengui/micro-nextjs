"use client";

import { useEffect, useState } from "react";
import microApp from "@micro-zoe/micro-app";
import { Menu } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

const MenuItem = Menu.Item;

enum MenuEnum {
  micro_react = "micro_react",
  micro_vue = "micro_vue",
}

const menus = {
  [MenuEnum.micro_react]: {
    name: MenuEnum.micro_react,
    entry: "http://localhost:5173",
  },
  [MenuEnum.micro_vue]: {
    name: MenuEnum.micro_vue,
    entry: "http://localhost:5174",
  },
};

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(menus[MenuEnum.micro_react]);

  useEffect(() => {
    if (!microApp.hasInit) {
      microApp.start({
        lifeCycles: {
          created(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} has been created.`
            );
          },
          beforemount(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} is about to render.`
            );
          },
          mounted(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} has finished rendering.`
            );
          },
          unmount(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} has been unmounted.`
            );
          },
          error(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} failed to load.`
            );
          },
        },
      });
    }
  }, []);

  return (
    <>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[activeMenu.name]}
        onClickMenuItem={(name) => setActiveMenu(menus[name as MenuEnum])}
      >
        {Object.values(menus).map((menu) => (
          <MenuItem key={menu.name}>{menu.name}</MenuItem>
        ))}
      </Menu>

      <micro-app name={activeMenu.name} url={activeMenu.entry} iframe />
    </>
  );
}
