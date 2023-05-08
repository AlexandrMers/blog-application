import { apiInstance } from 'shared/config/api'
import { createSelector } from 'reselect'

import {
  type IArticleClient,
  type IArticleResponse,
} from '../types/articleType'

import { type UserResponseType } from 'entities/User'

const mapResponseArticleToClient = ({
  img,
  blocks,
  subtitle,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at,
  author,
  type,
  title,
  id,
}: IArticleResponse): IArticleClient => ({
  createdAt: created_at,
  blocks,
  img,
  id,
  author,
  type,
  title,
  subtitle,
})

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
    getArticleById: builder.query<IArticleClient, number>({
      query: (id: number) => {
        return {
          url: `/articles/${id}?_expand=profile`,
          method: 'get',
        }
      },
      transformResponse: mapResponseArticleToClient,
    }),
  }),
})

export const selectArticleById = (id: number) =>
  createSelector(
    articleSlice.endpoints.getArticleById.select(id),
    (article) => article?.data
  )

export const { useGetArticlesByAuthorIdQuery, useGetArticleByIdQuery } =
  articleSlice
