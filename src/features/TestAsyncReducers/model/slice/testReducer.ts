import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type TestReducer } from '../types/TestReducer'

export const initialState: TestReducer = {
  field1: '',
  field2: '',
}

export const testSlice = createSlice({
  name: 'testReducer',
  initialState,
  reducers: {
    changeField: (
      state,
      {
        payload: { value, name },
      }: PayloadAction<{ name: 'field1' | 'field2'; value: string }>
    ) => {
      state[name] = value
    },
  },
})
