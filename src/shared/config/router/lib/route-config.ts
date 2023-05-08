export enum AppRoutes {
  ARTICLES = 'articles',
  MY_ARTICLES = 'myArticles',
  ARTICLE_DETAIL = 'articleDetail',
  PROFILE = 'profile',
  NOT_FOUND = 'notFound',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.ARTICLES]: '/',
  [AppRoutes.ARTICLE_DETAIL]: '/articles/:id',
  [AppRoutes.MY_ARTICLES]: '/my-articles',
  [AppRoutes.PROFILE]: '/profile/:userId',
  [AppRoutes.NOT_FOUND]: '*',
}
