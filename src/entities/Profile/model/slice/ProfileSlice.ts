import { apiInstance } from 'shared/config/api'

import { type ProfileResponseType } from './types'

export const profileSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileResponseType, undefined>({
      query: () => {
        return {
          url: `/profile`,
          method: 'get',
        }
      },
    }),

    changeProfile: builder.mutation<
      ProfileResponseType,
      Omit<ProfileResponseType, 'id'>
    >({
      query: (body) => {
        return {
          url: `/profile`,
          method: 'post',
          body,
        }
      },
    }),
  }),
})

export const { useGetProfileQuery } = profileSlice
