import { configureStore } from '@reduxjs/toolkit'

export const createStore = () => {
  return configureStore({
    reducer: {},
    devTools: Boolean(process.env.IS_DEV),
  })
}
