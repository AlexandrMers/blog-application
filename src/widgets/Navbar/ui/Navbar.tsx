import cn from "classnames";

import { AppLink } from "shared/ui";

import { NavigationConfig } from "../lib/navigation.config";
import { NavbarProps } from "../types/NavbarProps";

import styles from "./style.module.scss";

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(styles.Navbar, className)}>
      <div className={styles.Navbar__Menu}>
        {Object.values(NavigationConfig).map((link) => (
          <AppLink {...link}>{link.content}</AppLink>
        ))}
      </div>
    </div>
  );
};
