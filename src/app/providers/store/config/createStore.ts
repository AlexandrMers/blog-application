import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { CombinedState, Reducer, ReducersMapObject } from 'redux'

import { apiInstance } from 'shared/config/api'

import { authModel } from 'features/AuthByLogin'

import { reducerManager } from './reducerManager'

import { StateType } from './storeTypes'

// export const rtkQueryErrorLogger: Middleware =
//   (api: MiddlewareAPI) => (next) => (action) => {
//     if (isRejectedWithValue(action)) {
//       if (action.payload.status === 403) {
//         const error = getErrorFromResponse(action.payload)
//         api.dispatch(authModel.actions.setAuthErrorFromRequest(error))
//       }
//     }
//
//     return next(action)
//   }

export const createStore = (asyncReducers?: ReducersMapObject) => {
  const rootReducers: ReducersMapObject<StateType> = {
    ...asyncReducers,
    auth: authModel.reducer,
    [apiInstance.reducerPath]: apiInstance.reducer,
  }

  const reducerManagerInstance = reducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManagerInstance.reduce as Reducer<CombinedState<StateType>>,
    devTools: Boolean(process.env.IS_DEV),

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiInstance.middleware),
  })

  // @ts-ignore
  store.reducerManager = reducerManagerInstance

  setupListeners(store.dispatch)

  store.dispatch(authModel.actions.receiveDataFromStorage())

  return store
}
