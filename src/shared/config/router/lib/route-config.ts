export enum AppRoutes {
  ARTICLES = 'articles',
  MY_ARTICLES = 'myArticles',
  ARTICLE_DETAIL = 'articleDetail',
  PERSONAL_ACCOUNT = 'personalAccount',
  NOT_FOUND = 'notFound',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.ARTICLES]: '/',
  [AppRoutes.ARTICLE_DETAIL]: '/articles/:id',
  [AppRoutes.MY_ARTICLES]: '/my-articles',
  [AppRoutes.PERSONAL_ACCOUNT]: '/account',
  [AppRoutes.NOT_FOUND]: '*',
}
