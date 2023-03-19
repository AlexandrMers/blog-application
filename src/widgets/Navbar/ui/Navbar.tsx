import cn from "classnames";

import { AppLink, FlexContainer } from "shared/ui";

import { NavigationConfig } from "../lib/navigation.config";
import { NavbarProps } from "../types/NavbarProps";

import styles from "./style.module.scss";

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(styles.Navbar, className)}>
      <FlexContainer justifyContent="end">
        <div className={styles.Navbar__Menu}>
          {Object.values(NavigationConfig).map((link) => (
            <AppLink {...link}>{link.content}</AppLink>
          ))}
        </div>
      </FlexContainer>
    </div>
  );
};
