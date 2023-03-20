import cn from "classnames";

import { AppLink, FlexContainer } from "shared/ui";

import { NavigationConfig } from "../lib/navigation.config";
import { HeaderProps } from "../types/HeaderProps";

import styles from "./style.module.scss";

export const Header = ({ className, leftElement }: HeaderProps) => {
  return (
    <div className={cn(styles.Header, className)}>
      {leftElement}
      <FlexContainer justifyContent="end">
        <div className={styles.Header__Menu}>
          {Object.values(NavigationConfig).map((link) => (
            <AppLink {...link}>{link.content}</AppLink>
          ))}
        </div>
      </FlexContainer>
    </div>
  );
};
