import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface TestReducer {
  field1: string
  field2: string
}

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
