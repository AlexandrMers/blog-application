declare type RootState = ReturnType<
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  ReturnType<typeof import('./createStore').createStore>['getState']
>
declare type AppDispatch = ReturnType<
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  typeof import('./createStore').createStore
>['dispatch']
