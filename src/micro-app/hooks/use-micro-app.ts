"use client";

import microApp from "@micro-zoe/micro-app";
import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";

interface MicroAppPayload {
  channel: MicroAppCommunicationChannel;
  payload?: Record<PropertyKey, unknown>;
}

export const useMicroApp = () => {
  function forceSetData(
    appName: string,
    payload: MicroAppPayload,
    nextStep?: CallableFunction
  ) {
    return microApp.forceSetData(
      appName,
      payload as unknown as Record<PropertyKey, unknown>,
      nextStep
    );
  }

  function forceSetGlobalData(
    payload: MicroAppPayload,
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
