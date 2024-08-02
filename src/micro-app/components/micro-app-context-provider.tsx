"use client";

import { useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import microApp from "@micro-zoe/micro-app";
import { useMicroApp } from "../hooks";
import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";
import { globalDataState } from "@/src/recoil/micro-app-communication-atom";

interface MicroAppContextProviderProps {
  children: React.ReactNode;
}

export const MicroAppContextProvider: React.FC<MicroAppContextProviderProps> = (
  props
) => {
  const globalData = useRecoilValue(globalDataState);
  const { forceSetGlobalData } = useMicroApp();

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

  useEffect(
    () =>
      forceSetGlobalData({
        channel:
          MicroAppCommunicationChannel.MICRO_APP_COMMUNICATION_CHANNEL_GLOBAL_DATA,
        payload: {},
      }),
    [globalData]
  );

  return props.children;
};
