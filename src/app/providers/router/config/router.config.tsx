import React from 'react'

import { type RouteProps } from 'react-router'

import { AppRoutes, RoutesPath } from 'shared/config/router'

import { NotFoundPage } from 'pages/NotFoundPage'

const PersonalAccountPage = React.lazy(
  async () => await import('pages/PersonalAccount')
)
const ArticlesPage = React.lazy(async () => await import('pages/ArticlesPage'))
const MyArticlesPage = React.lazy(
  async () => await import('pages/MyArticlesPage')
)

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ARTICLES]: {
    path: RoutesPath.articles,
    element: <ArticlesPage />,
  },
  [AppRoutes.MY_ARTICLES]: {
    path: RoutesPath.myArticles,
    element: <MyArticlesPage />,
  },
  [AppRoutes.PERSONAL_ACCOUNT]: {
    path: RoutesPath.personalAccount,
    element: <PersonalAccountPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.notFound,
    element: <NotFoundPage />,
  },
}
