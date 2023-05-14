import { apiInstance, TAG_TYPES_FOR_API } from 'shared/config/api'

import { type ProfileResponseType } from './types'

export const profileSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getProfile: builder.query<ProfileResponseType, number>({
      query: (userId) => {
        return {
          url: `/profiles/${userId}`,
          method: 'GET',
        }
      },

      providesTags: [TAG_TYPES_FOR_API.PROFILE],
    }),

    changeProfile: builder.mutation<
      ProfileResponseType,
      Omit<ProfileResponseType, 'avatar'>
    >({
      query: (body) => {
        return {
          url: `/profiles/${body.id}`,
          method: 'PATCH',
          body,
        }
      },

      invalidatesTags: [TAG_TYPES_FOR_API.PROFILE],
    }),
  }),
})

export const { useGetProfileQuery, useChangeProfileMutation } = profileSlice
