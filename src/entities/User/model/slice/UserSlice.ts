import { apiInstance } from 'shared/config/api'

import { type UserRequestType, type UserResponseType } from '../types/User'

export const userSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponseType, UserRequestType>({
      query: (body) => {
        return {
          url: '/login',
          method: 'post',
          body,
        }
      },
    }),
  }),
})

export const { useLoginMutation } = userSlice
