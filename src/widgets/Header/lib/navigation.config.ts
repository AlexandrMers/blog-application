import { type LinkProps } from 'react-router-dom'

export enum NavigationRoutes {
  PROFILE = 'profile',
  ARTICLES = 'articles',
  MY_ARTICLES = 'myArticles',
}

export const NavigationConfig: Record<
  NavigationRoutes,
  Pick<LinkProps, 'to'> & { key: string }
> = {
  [NavigationRoutes.ARTICLES]: {
    to: '/',
    key: 'articles',
  },

  [NavigationRoutes.MY_ARTICLES]: {
    to: '/my-articles',
    key: 'my_articles',
  },

  [NavigationRoutes.PROFILE]: {
    to: '/profile',
    key: NavigationRoutes.PROFILE,
  },
}
