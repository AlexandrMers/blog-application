import { createEntityAdapter, type EntityState } from '@reduxjs/toolkit'

import { apiInstance } from 'shared/config/api'

import {
  type ICommentClient,
  type ICommentResponse,
} from '../types/commentTypes'

import { mapResponseCommentToClient } from './mappings'

interface CommentsState extends EntityState<ICommentClient> {}

const commentsAdapter = createEntityAdapter<ICommentClient>({
  selectId: (model) => model.id,
})

const initialState = commentsAdapter.getInitialState()

export const commentSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    getCommentList: builder.query<CommentsState, number>({
      query: (articleId: number) => {
        return {
          url: `/comments?articleId=${articleId}&_expand=profile`,
          method: 'get',
        }
      },
      transformResponse: (responseData: ICommentResponse[]) => {
        const formattedData = responseData.map(mapResponseCommentToClient)
        return commentsAdapter.setAll(initialState, formattedData)
      },
    }),
  }),
})

export const { useGetCommentListQuery } = commentSlice

export const selectors = commentsAdapter.getSelectors<
  CommentsState | undefined
>((state) => state ?? initialState)
