import { atom } from "recoil";
import { GlobalShared } from "@/generated/proto/globally_shared_pb";

export const globalSharedState = atom<GlobalShared.AsObject>({
  key: "globalSharedState",
  default: {},
});
