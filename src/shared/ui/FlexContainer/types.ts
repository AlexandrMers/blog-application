import { PropsWithChildren } from "react";

export type FlexContainerTypes = PropsWithChildren<{
  className?: string;
  justifyContent?: "start" | "center" | "end";
}>;
