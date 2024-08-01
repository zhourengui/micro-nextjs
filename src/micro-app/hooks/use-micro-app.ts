import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { globalDataState } from "@/src/stores/atom";
import microApp from "@micro-zoe/micro-app";

export const useMicroApp = () => {
  const globalData = useRecoilValue(globalDataState);

  useEffect(() => {
    if (!microApp.hasInit) {
      microApp.start({
        lifeCycles: {
          created(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} has been created.`
            );
          },
          beforemount(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} is about to render.`
            );
          },
          mounted(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} has finished rendering.`
            );
          },
          unmount(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} has been unmounted.`
            );
          },
          error(_, appName) {
            console.log(
              `[micro-app] The child application ${appName} failed to load.`
            );
          },
        },
      });
    }
  }, []);

  useEffect(() => {
    microApp.forceSetGlobalData(globalData);
  }, [globalData]);
};
