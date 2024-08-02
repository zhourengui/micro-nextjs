import { HTMLAttributes } from "react";
import { GlobalShared } from "@/generated/proto/globally_shared_pb";
import { CallableFunctionForInteract } from "@micro-app/types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "micro-app": {
        name: string;
        url: string;
        iframe?: boolean;
      };
    }
  }
}
