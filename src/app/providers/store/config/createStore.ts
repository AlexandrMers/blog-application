import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { apiInstance } from 'shared/config/api'

import { authModel } from 'features/AuthByLogin'

export const createStore = () => {
  const store = configureStore({
    reducer: {
      auth: authModel.reducer,
      [apiInstance.reducerPath]: apiInstance.reducer,
    },
    devTools: Boolean(process.env.IS_DEV),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiInstance.middleware),
  })

  setupListeners(store.dispatch)

  store.dispatch(authModel.actions.receiveDataFromStorage())

  return store
}
