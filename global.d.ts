import { HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "micro-app": {
        name: string;
        url: string;
        iframe?: boolean;
        onCreated?: VoidFunction;
        onBeforemount?: VoidFunction;
        onMounted?: VoidFunction;
        onUnmount?: VoidFunction;
        onError?: VoidFunction;
      };
    }
  }
}
