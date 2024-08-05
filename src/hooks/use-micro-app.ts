"use client";

import microApp from "@micro-zoe/micro-app";
import { GlobalDataPayload, SingleDataPayload } from "../interfaces";

export const useMicroApp = () => {
  function forceSetData(
    appName: string,
    payload: SingleDataPayload,
    nextStep?: CallableFunction
  ) {
    return microApp.forceSetData(
      appName,
      payload as unknown as Record<PropertyKey, unknown>,
      nextStep
    );
  }

  function forceSetGlobalData(
    payload: GlobalDataPayload,
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
