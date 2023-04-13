import { AnyAction, CombinedState, Reducer, ReducersMapObject } from 'redux'

import { TestReducer } from 'features/TestAsyncReducers/model'
import { AuthSliceType } from 'features/AuthByLogin'
import { EnhancedStore } from '@reduxjs/toolkit'

export interface StateType {
  auth: AuthSliceType

  // Async Reducers
  testReducer?: TestReducer
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateType>
  reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateType> {
  reducerManager: ReducerManager
}
