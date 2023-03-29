import { type PropsWithChildren } from 'react'

import { Provider } from 'react-redux'

import { createStore } from '../config/createStore'

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const store = createStore()

  return <Provider store={store}>{children}</Provider>
}
