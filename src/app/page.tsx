"use client";

import { useState } from "react";
import { Button, Menu } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { useMicroApp } from "@/src/micro-app/hooks/use-micro-app";
import { useRecoilState } from "recoil";
import { globalDataState } from "@/src/stores/atom";

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
  useMicroApp();

  const [activeMenu, setActiveMenu] = useState(menus[MenuEnum.micro_react]);
  const [globalData, setGlobalData] = useRecoilState(globalDataState);

  return (
    <>
      <Button
        type="primary"
        onClick={() =>
          setGlobalData({ counter: Number(globalData.counter) + 1 })
        }
      >
        Counter++
      </Button>
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
