import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { RouteConfig } from '../lib/router.config'

export const AppRoute = () => {
  return (
    <React.Suspense fallback={'Loading route ...'}>
      <Routes>
        {Object.values(RouteConfig).map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </React.Suspense>
  )
}
