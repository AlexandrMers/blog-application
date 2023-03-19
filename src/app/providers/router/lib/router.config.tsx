import React from "react";

import { RouteProps } from "react-router";

import { AppRoutes, RoutesPath } from "shared/config/router";

const MainPage = React.lazy(() => import("pages/MainPage"));
const AboutPage = React.lazy(() => import("pages/AboutPage"));
const ArticlesPage = React.lazy(() => import("pages/ArticlesPage"));

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
