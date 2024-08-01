import { atom } from "recoil";

export const globalState = atom({
  key: "globalState",
  default: {
    name: "Rengui Zhou",
  },
});
