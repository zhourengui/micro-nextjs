"use client";

import { Button } from "@arco-design/web-react";
import {
  MicroAppCommunicationChannel,
  MicroAppNameType,
} from "@/generated/proto/element";
import { useRecoilState } from "recoil";
import { useMicroApp } from "../hooks";
import "@arco-design/web-react/dist/css/arco.css";
import { globalDataState } from "../stores/global-data-atom";
import { microAppCofnigs } from "./micro-app-configs";

export default function Home() {
  const { forceSetData } = useMicroApp();
  const [_, setGlobalData] = useRecoilState(globalDataState);
  const sendDataToSubApp = () => {
    forceSetData(MicroAppNameType[MicroAppNameType.MICRO_REACT], {
      channel: MicroAppCommunicationChannel.MAIN_REACT_CHANNEL1,
      payload: {},
    });

    forceSetData(MicroAppNameType[MicroAppNameType.MICRO_VUE], {
      channel: MicroAppCommunicationChannel.MAIN_VUE_CHANNEL1,
      payload: {},
    });
  };

  const changeGlobalData = () => {
    setGlobalData({ random: Math.random() });
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
          name={MicroAppNameType[MicroAppNameType.MICRO_REACT]}
          url={microAppCofnigs[MicroAppNameType.MICRO_REACT].entry}
        />

        <micro-app
          name={MicroAppNameType[MicroAppNameType.MICRO_VUE]}
          url={microAppCofnigs[MicroAppNameType.MICRO_VUE].entry}
        />
      </div>
    </>
  );
}
