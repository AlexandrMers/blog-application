import { apiInstance } from 'shared/config/api'

import { type UserResponseType } from 'entities/User'

interface ArticleResponseType {
  id: number
  title: string
  author: Omit<UserResponseType, 'token'>
}

export const articleSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    getArticlesByAuthorId: builder.query<ArticleResponseType[], number>({
      query: (authorId: number) => {
        return {
          url: `/articles?author.id=${authorId}`,
          method: 'get',
        }
      },
    }),
  }),
})

export const { useGetArticlesByAuthorIdQuery } = articleSlice
