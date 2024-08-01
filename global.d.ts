import { HTMLAttributes } from "react";
import { GlobalShared } from "@/generated/proto/globally_shared_pb";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "micro-app": {
        name: string;
        url: string;
        iframe?: boolean;
        data?: GlobalShared.AsObject;
      };
    }
  }
}
