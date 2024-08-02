import { atom, selector } from "recoil";

import { MicroAppCommunicationChannel } from "@/generated/proto/element_pb";

export interface MicroAppCommunicatioPayload {
  channel: MicroAppCommunicationChannel;
  payload: Record<PropertyKey, unknown>;
}

type MicroAppCommunicationState = Partial<{
  [K in MicroAppCommunicationChannel]: MicroAppCommunicatioPayload;
}>;

export const microAppCommunicationState = atom<MicroAppCommunicationState>({
  key: "microAppCommunicationState",
  default: {},
});

export const globalDataState = selector({
  key: "globalDataState",
  get: ({ get }) => {
    return get(microAppCommunicationState)[
      MicroAppCommunicationChannel.MAIN_ALL_GLOBAL_DATA_CHANGE_CHANNEL
    ];
  },
});
