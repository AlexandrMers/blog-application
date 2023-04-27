import { apiInstance } from 'shared/config/api'

import {
  type ICommentClient,
  type ICommentResponse,
} from '../types/commentTypes'

import { mapResponseCommentToClient } from './mappings'

// TODO - надо попробовать внедрить EntityAdapter!!!
export const commentSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    getCommentList: builder.query<ICommentClient[], number>({
      query: (articleId: number) => {
        return {
          url: `/comments?articleId=${articleId}&_expand=profile`,
          method: 'get',
        }
      },
      transformResponse: (response: ICommentResponse[]) =>
        response.map(mapResponseCommentToClient),
    }),
  }),
})

export const { useGetCommentListQuery } = commentSlice
