"use client";

import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { useMicroApp } from "../micro-app";
import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";
import { useRecoilState } from "recoil";
import { microAppCommunicationState } from "../recoil/micro-app-communication-atom";

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
  const { forceSetData } = useMicroApp();
  const [microAppCommunication, setMicroAppCommunication] = useRecoilState(
    microAppCommunicationState
  );

  const sendDataToSubApp = () => {
    forceSetData(menus[MenuEnum.micro_react].name, {
      channel: MicroAppCommunicationChannel.MAIN_REACT_CHANNEL1,
      payload: {
        random: Math.random(),
      },
    });

    forceSetData(menus[MenuEnum.micro_vue].name, {
      channel: MicroAppCommunicationChannel.MAIN_VUE_CHANNEL1,
      payload: {
        random: Math.random(),
      },
    });
  };

  const changeGlobalData = () => {
    setMicroAppCommunication({
      ...microAppCommunication,
      [MicroAppCommunicationChannel.MAIN_ALL_GLOBAL_DATA_CHANGE_CHANNEL]: {
        channel:
          MicroAppCommunicationChannel.MAIN_ALL_GLOBAL_DATA_CHANGE_CHANNEL,
        payload: {
          random: Math.random(),
        },
      },
    });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Button type="primary" onClick={changeGlobalData}>
          更改全局数据
        </Button>
        <Button type="primary" onClick={sendDataToSubApp}>
          主应用向子应用发送数据
        </Button>
      </div>
      <div className="flex justify-center mt-10">
        <micro-app
          name={menus[MenuEnum.micro_react].name}
          url={menus[MenuEnum.micro_react].entry}
          iframe
        />
        <micro-app
          name={menus[MenuEnum.micro_vue].name}
          url={menus[MenuEnum.micro_vue].entry}
          iframe
        />
      </div>
    </>
  );
}
