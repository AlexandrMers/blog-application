import { type LinkProps } from 'react-router-dom'

export enum NavigationRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  ARTICLES = 'articles',
}

export const NavigationConfig: Record<
  NavigationRoutes,
  Pick<LinkProps, 'to'> & { key: string }
> = {
  [NavigationRoutes.MAIN]: {
    to: '/',
    key: 'main',
  },
  [NavigationRoutes.ABOUT]: {
    to: '/about',
    key: 'about',
  },
  [NavigationRoutes.ARTICLES]: {
    to: '/articles',
    key: 'articles',
  },
}
