"use client";

import { useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import microApp from "@micro-zoe/micro-app";
import { MicroAppNameType } from "@/generated/proto/element";
import { globalDataState } from "../stores/global-data-atom";
import { useMicroApp } from "../hooks";
import { MicroAppSinigleDataPayload } from "@/generated/proto/micro_app_single_data_payload";

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
        "disable-memory-router": true,
        iframe: true,
        ssr: true,
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

  useEffect(() => forceSetGlobalData(globalData), [globalData]);

  useEffect(() => {
    const keys = Object.keys(MicroAppNameType);

    microApp.addDataListener(
      MicroAppNameType[MicroAppNameType.MICRO_VUE],
      (payload: MicroAppSinigleDataPayload) => {
        alert(`[${payload.appName}]: ${JSON.stringify(payload.payload)}`);
      }
    );

    microApp.addDataListener(
      MicroAppNameType[MicroAppNameType.MICRO_REACT],
      (payload: MicroAppSinigleDataPayload) => {
        alert(`[${payload.appName}]: ${JSON.stringify(payload.payload)}`);
      }
    );
  }, []);

  return props.children;
};
