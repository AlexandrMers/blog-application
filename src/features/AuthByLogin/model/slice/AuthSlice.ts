import { createSlice } from '@reduxjs/toolkit'

import { getErrorFromResponse } from 'shared/helpers'

import { userModel } from 'entities/User'

import { type AuthSlice } from '../types/AuthSliceTypes'

export const initialState: AuthSlice = {
  isLoading: false,
  authData: undefined,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userModel.userSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.authData = payload
      }
    )
    builder.addMatcher(
      userModel.userSlice.endpoints.login.matchRejected,
      (state, { payload: error }) => {
        state.isLoading = false
        state.error = getErrorFromResponse(error)
        state.authData = undefined
      }
    )
    builder.addMatcher(
      userModel.userSlice.endpoints.login.matchPending,
      (state) => {
        state.isLoading = true
        state.error = null
        state.authData = undefined
      }
    )
  },
})
