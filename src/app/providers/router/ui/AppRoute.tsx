import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PageLoader } from 'widgets/PageLoader'

import { RouteConfig } from '../config/router.config'

export const AppRoute = () => {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(RouteConfig).map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </React.Suspense>
  )
}
