import { atom } from "recoil";
import { GlobalData } from "../generated/proto/global_data_pb";

export const globalDataState = atom<GlobalData.AsObject>({
  key: "globalDataState",
  default: {
    counter: 0,
  },
});
