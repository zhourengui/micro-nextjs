import { atom } from "recoil";

export interface GlobalDataState {}

export const globalDataState = atom<GlobalDataState>({
  key: "globalDataState",
  default: {},
});
