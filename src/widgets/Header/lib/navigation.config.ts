import { type LinkProps } from 'react-router-dom'

import { AppRoutes } from 'shared/config/router'

export const NavigationConfig: Record<
AppRoutes,
Pick<LinkProps, 'to'> & { key: string }
> = {
  [AppRoutes.MAIN]: {
    to: '/',
    key: 'main'
  },
  [AppRoutes.ABOUT]: {
    to: '/about',
    key: 'about'
  },
  [AppRoutes.ARTICLES]: {
    to: '/articles',
    key: 'articles'
  }
}
