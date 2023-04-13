declare type StoreSchema = import('./storeTypes').StateType

declare type ReduxStoreWithManager =
  import('./storeTypes').ReduxStoreWithManager

declare type AppDispatch = ReturnType<
  typeof import('./createStore').createStore
>['dispatch']

declare type StateSchemaKey = keyof import('./storeTypes').StateType
