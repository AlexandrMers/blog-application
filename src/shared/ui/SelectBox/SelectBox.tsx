import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";

import { SelectBoxPropTypes } from "./types";
import { SuggestType } from "../../types";

export const SelectBox = ({ options, value, onChange }: SelectBoxPropTypes) => {
  const handleChange = (e: SelectChangeEvent<SuggestType["id"]>) => {
    onChange(e.target.value);
  };

  return (
    <Select value={value} onChange={handleChange}>
      {options.map(({ id, name, render }) => (
        <MenuItem value={id}>{render ? render(name) : name}</MenuItem>
      ))}
    </Select>
  );
};
