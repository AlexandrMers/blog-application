import { apiInstance } from 'shared/config/api'

import { type UserResponseType } from 'entities/User'
import {
  type IArticleClient,
  type IArticleResponse,
} from '../types/articleType'

const mapResponseArticleToClient = ({
  img,
  blocks,
  subtitle,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at,
  type,
  title,
  id,
}: IArticleResponse): IArticleClient => ({
  createdAt: created_at,
  blocks,
  img,
  id,
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
          url: `/articles/${id}`,
          method: 'get',
        }
      },
      transformResponse: mapResponseArticleToClient,
    }),
  }),
})

export const { useGetArticlesByAuthorIdQuery, useGetArticleByIdQuery } =
  articleSlice
