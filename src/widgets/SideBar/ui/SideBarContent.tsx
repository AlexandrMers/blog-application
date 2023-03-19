import React, { PropsWithChildren, ReactNode } from "react";

import styles from "./style.module.scss";

export const SideBarContent = ({
  endCellRender,
}: PropsWithChildren<{
  endCellRender?: ReactNode;
}>) => {
  return (
    <div className={styles.SideBarContent}>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <div className={styles.SideBarContent__EndCell}>{endCellRender}</div>
    </div>
  );
};
