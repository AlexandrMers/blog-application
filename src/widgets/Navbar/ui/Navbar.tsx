import cn from "classnames";
import { Link } from "react-router-dom";

import { NavigationConfig } from "../lib/navigation.config";
import { NavbarProps } from "../types/NavbarProps";

import styles from "./style.module.scss";

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(styles.Navbar, className)}>
      {Object.values(NavigationConfig).map((link) => {
        return (
          <Link className={styles.Navbar__Link} to={link.to}>
            {link.content}
          </Link>
        );
      })}
    </div>
  );
};
