import { ReactNode } from "react";

export type SuggestType = {
  id: string | number;
  name: string;
  render?: (name: string) => ReactNode;
};
