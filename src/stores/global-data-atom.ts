import { MicroAppGlobalDataPayload } from "@/generated/proto/micro_app_global_data_payload";
import { atom } from "recoil";

export const globalDataState = atom<MicroAppGlobalDataPayload>({
  key: "globalDataState",
  default: {},
});
