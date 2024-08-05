"use client";

import { MicroAppGlobalDataPayload } from "@/generated/proto/micro_app_global_data_payload";
import { MicroAppSinigleDataPayload } from "@/generated/proto/micro_app_single_data_payload";
import microApp from "@micro-zoe/micro-app";

export const useMicroApp = () => {
  function forceSetData(
    appName: string,
    payload: MicroAppSinigleDataPayload,
    nextStep?: CallableFunction
  ) {
    return microApp.forceSetData(
      appName,
      payload as unknown as Record<PropertyKey, unknown>,
      nextStep
    );
  }

  function forceSetGlobalData(
    payload: MicroAppGlobalDataPayload,
    nextStep?: CallableFunction
  ) {
    return microApp.forceSetGlobalData(
      payload as unknown as Record<PropertyKey, unknown>,
      nextStep
    );
  }

  return {
    forceSetData,
    forceSetGlobalData,
  };
};
