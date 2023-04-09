import { createSlice } from '@reduxjs/toolkit'

import {
  getErrorFromResponse,
  setItemToLocalStorage,
  getItemFromLocalStorage,
} from 'shared/helpers'

import { userModel, type UserResponseType } from 'entities/User'

import { type AuthSlice } from '../types/AuthSliceTypes'
import { AUTHORIZATION_IN_LOCAL_STORAGE_KEY } from '../constants/keys'

export const initialState: AuthSlice = {
  isLoading: false,
  authData: undefined,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    receiveDataFromStorage: (state) => {
      const data = getItemFromLocalStorage<UserResponseType>(
        AUTHORIZATION_IN_LOCAL_STORAGE_KEY
      )

      if (data) {
        state.authData = data
      }
    },
    logout: (state) => {
      state.authData = undefined
      setItemToLocalStorage(AUTHORIZATION_IN_LOCAL_STORAGE_KEY, null)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userModel.userSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isLoading = false
        state.error = null
        state.authData = setItemToLocalStorage(
          AUTHORIZATION_IN_LOCAL_STORAGE_KEY,
          payload
        )
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
