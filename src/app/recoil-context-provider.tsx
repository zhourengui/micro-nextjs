"use client";

import { RecoilRoot } from "recoil";
import React from "react";

interface RecoidContextProviderProps {
  children: React.ReactNode;
}

export const RecoilContextProvider: React.FC<RecoidContextProviderProps> = (
  props
) => {
  return <RecoilRoot>{props.children}</RecoilRoot>;
};
