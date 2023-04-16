import { apiInstance } from 'shared/config/api'

import { type ProfileResponseType } from './types'

export const profileSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getProfile: builder.query<ProfileResponseType, void>({
      query: () => {
        return {
          url: `/profile`,
          method: 'get',
        }
      },

      providesTags: ['Profile'],
    }),

    changeProfile: builder.mutation<
      ProfileResponseType,
      Omit<ProfileResponseType, 'id' | 'avatar'>
    >({
      query: (body) => {
        return {
          url: `/profile`,
          method: 'post',
          body,
        }
      },

      invalidatesTags: ['Profile'],
    }),
  }),
})

export const { useGetProfileQuery, useChangeProfileMutation } = profileSlice
