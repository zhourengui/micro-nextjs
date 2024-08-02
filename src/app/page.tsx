"use client";

import { useState } from "react";
import { Button, Menu } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { useMicroApp } from "../micro-app";
import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";

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
  const { forceSetData } = useMicroApp();

  const sendDataToSubApp = () => {
    forceSetData(activeMenu.name, {
      channel:
        MicroAppCommunicationChannel.MICRO_APP_COMMUNICATION_CHANNEL_UNSPECIFIED,
      payload: {
        random: Math.random(),
      },
    });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Button type="primary" onClick={sendDataToSubApp}>
          主应用向子应用发送数据
        </Button>
      </div>
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
