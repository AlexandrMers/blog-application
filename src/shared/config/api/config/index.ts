import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiInstance = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: () => ({}),
})
