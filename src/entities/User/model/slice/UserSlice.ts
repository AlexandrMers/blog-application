import { createSlice } from '@reduxjs/toolkit'

import { type UserSchema } from '../types/User'

const initialState: UserSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const { reducer: userReducer, actions: userActions } = userSlice
