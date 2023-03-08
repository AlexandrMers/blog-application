import { LinkProps } from "react-router-dom";

import { AppRoutes } from "shared/config/router";

export const NavigationConfig: Record<
  AppRoutes,
  Pick<LinkProps, "to"> & { content: string; key: string }
> = {
  [AppRoutes.MAIN]: {
    to: "/",
    content: "Главная",
    key: "main",
  },
  [AppRoutes.ABOUT]: {
    to: "/about",
    content: "О нас",
    key: "about",
  },
};
