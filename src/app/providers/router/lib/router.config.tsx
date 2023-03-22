import React from 'react'

import { type RouteProps } from 'react-router'

import { AppRoutes, RoutesPath } from 'shared/config/router'

import { NotFoundPage } from 'pages/NotFoundPage'

const MainPage = React.lazy(async () => await import('pages/MainPage'))
const AboutPage = React.lazy(async () => await import('pages/AboutPage'))
const ArticlesPage = React.lazy(async () => await import('pages/ArticlesPage'))

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />
  },
  [AppRoutes.ARTICLES]: {
    path: RoutesPath.articles,
    element: <ArticlesPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.notFound,
    element: <NotFoundPage />
  }
}
