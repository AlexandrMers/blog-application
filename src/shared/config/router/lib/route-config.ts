export enum AppRoutes {
  ARTICLES = 'articles',
  ARTICLE_DETAIL = 'articleDetail',
  ARTICLE_CREATE = 'articleCreate',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.ARTICLES]: '/',
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_DETAIL]: '/articles/:id',
  [AppRoutes.PROFILE]: '/profile/:userId',
  [AppRoutes.NOT_FOUND]: '*',
}
