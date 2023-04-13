import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ReducersMapObject } from 'redux'

import { apiInstance } from 'shared/config/api'

import { authModel } from 'features/AuthByLogin'

import { reducerManager } from './reducerManager'

import { StateType } from './storeTypes'

export const createStore = (asyncReducers?: ReducersMapObject) => {
  const rootReducers: ReducersMapObject<StateType> = {
    ...asyncReducers,
    auth: authModel.reducer,

    // @ts-ignore
    [apiInstance.reducerPath]: apiInstance.reducer,
  }

  const reducerManagerInstance = reducerManager(rootReducers)

  const store = configureStore<StateType>({
    reducer: reducerManagerInstance.reduce,
    devTools: Boolean(process.env.IS_DEV),
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiInstance.middleware),
  })

  // @ts-ignore
  store.reducerManager = reducerManagerInstance

  setupListeners(store.dispatch)

  store.dispatch(authModel.actions.receiveDataFromStorage())

  return store
}
