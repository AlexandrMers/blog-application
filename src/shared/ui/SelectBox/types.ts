import { SuggestType } from "../../types";

export type SelectBoxPropTypes = {
  options: SuggestType[];
  value: SuggestType["id"];
  onChange: (value: SuggestType["id"]) => void;
};
