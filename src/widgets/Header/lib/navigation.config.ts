import { type LinkProps } from 'react-router-dom'

export enum NavigationRoutes {
  PROFILE = 'profile',
  ARTICLES = 'articles',
}

export const NavigationConfig: Record<
  NavigationRoutes,
  Pick<LinkProps, 'to'> & { key: string }
> = {
  [NavigationRoutes.ARTICLES]: {
    to: '/',
    key: 'articles',
  },
  [NavigationRoutes.PROFILE]: {
    to: '/profile',
    key: NavigationRoutes.PROFILE,
  },
}
