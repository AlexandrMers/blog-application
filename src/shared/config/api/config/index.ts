import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export enum TAG_TYPES_FOR_API {
  PROFILE = 'Profile',
  COMMENTS = 'Comments',
}

export const apiInstance = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as StoreSchema).auth.authData?.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: [TAG_TYPES_FOR_API.PROFILE, TAG_TYPES_FOR_API.COMMENTS],
  endpoints: () => ({}),
})
