import { MicroAppNameType } from "@/generated/proto/element";

export const microAppCofnigs = {
  [MicroAppNameType.MICRO_REACT]: {
    entry: "http://localhost:5173",
  },
  [MicroAppNameType.MICRO_VUE]: {
    entry: "http://localhost:5174",
  },
};
