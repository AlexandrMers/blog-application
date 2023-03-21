export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  ARTICLES = 'articles',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.ARTICLES]: '/articles'
}
