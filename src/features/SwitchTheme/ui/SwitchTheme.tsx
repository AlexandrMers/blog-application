import React from "react";

import { SwitchThemeTypes } from "../types/SwitchThemeTypes";

export const SwitchTheme = ({ toggleTheme }: SwitchThemeTypes) => {
  return <button onClick={toggleTheme}>Switch Theme</button>;
};
