import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderParams {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const useAsyncReducerLoader = ({
  removeAfterUnmount,
  reducers,
}: DynamicModuleLoaderParams) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      if (!store.getState()[name]) {
        store.reducerManager.add(name, reducer)
        dispatch({ type: `@INIT ${name as string} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name as string} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
}
