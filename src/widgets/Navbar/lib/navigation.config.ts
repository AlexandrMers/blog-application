import { LinkProps } from "react-router-dom";

import { AppRoutes } from "shared/config/router";

export const NavigationConfig: Record<
  AppRoutes,
  Pick<LinkProps, "to"> & { content: string }
> = {
  [AppRoutes.MAIN]: {
    to: "/",
    content: "Главная",
  },
  [AppRoutes.ABOUT]: {
    to: "/about",
    content: "О нас",
  },
};
