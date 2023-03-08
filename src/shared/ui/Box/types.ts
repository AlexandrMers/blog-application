import { PropsWithChildren } from "react";

export type BoxTypes = PropsWithChildren<{
  className?: string;
  insideSize?: "s" | "m" | "l";
}>;
