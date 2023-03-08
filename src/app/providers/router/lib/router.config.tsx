import { RouteProps } from "react-router";

import { AppRoutes, RoutesPath } from "shared/config/router";

import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";
import ArticlesPage from "pages/ArticlesPage";

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutesPath.articles,
    element: <ArticlesPage />,
  },
};
