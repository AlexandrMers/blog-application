import { configureStore } from '@reduxjs/toolkit'

import { userModel } from 'entities/User'

export const createStore = () => {
  return configureStore({
    reducer: {
      user: userModel.userReducer,
    },
    devTools: Boolean(process.env.IS_DEV),
  })
}
