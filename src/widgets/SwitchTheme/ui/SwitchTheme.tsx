import React from "react";
import cn from "classnames";

import { SwitchThemeTypes } from "../types/SwitchThemeTypes";

import styles from "./styles.module.scss";

export const SwitchTheme = ({ checked, toggleTheme }: SwitchThemeTypes) => {
  return (
    <div
      className={cn(styles.Switcher, { [styles.Switcher_checked]: checked })}
    >
      <input
        className={styles.Switcher__Checkbox}
        type="checkbox"
        id="toggle_checkbox"
        checked={checked}
        onChange={toggleTheme}
      />
      <label className={styles.Switcher__Label} htmlFor="toggle_checkbox">
        <div className={styles.Switcher__Star} />
      </label>
    </div>
  );
};
