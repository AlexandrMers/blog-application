import React from 'react'

import { type RouteProps } from 'react-router'

import { AppRoutes, RoutesPath } from 'shared/config/router'

import { NotFoundPage } from 'pages/NotFoundPage'

const PersonalAccountPage = React.lazy(
  async () => await import('pages/ProfilePage')
)
const ArticlesPage = React.lazy(async () => await import('pages/ArticlesPage'))
const ArticleDetailPage = React.lazy(
  async () => await import('pages/ArticleDetailPage')
)

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ARTICLES]: {
    path: RoutesPath.articles,
    element: <ArticlesPage />,
  },
  [AppRoutes.ARTICLE_DETAIL]: {
    path: RoutesPath.articleDetail,
    element: <ArticleDetailPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutesPath.profile,
    element: <PersonalAccountPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPath.notFound,
    element: <NotFoundPage />,
  },
}
