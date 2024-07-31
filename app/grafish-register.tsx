"use client";

import { Menu } from "@arco-design/web-react";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Garfish, { interfaces } from "garfish";
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

interface GrafishRegisterProps {}

const GrafishRegister: React.FC<GrafishRegisterProps> = () => {
  const [activeMenu, setActiveMenu] = useState(menus[MenuEnum.micro_react]);
  const subAppRef = useRef<interfaces.App | null>(null);

  useEffect(() => {
    Garfish.loadApp(activeMenu.name, {
      cache: true,
      domGetter: "#sub-app",
      entry: activeMenu.entry,
      sandbox: false,
    }).then((app) => {
      subAppRef.current = app;
      app?.mount();
    });

    return () => {
      subAppRef.current?.unmount();
    };
  }, [activeMenu]);

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
      <div id="sub-app" />
    </>
  );
};

export default GrafishRegister;
