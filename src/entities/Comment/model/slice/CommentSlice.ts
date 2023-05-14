import { createEntityAdapter, type EntityState } from '@reduxjs/toolkit'

import { apiInstance, TAG_TYPES_FOR_API } from 'shared/config/api'

import { type IComment, type ICreateCommentQuery } from '../types/commentTypes'

interface CommentsState extends EntityState<IComment> {}

const commentsAdapter = createEntityAdapter<IComment>({
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
      transformResponse: (responseData: IComment[]) => {
        return commentsAdapter.setAll(initialState, responseData)
      },
      providesTags: [TAG_TYPES_FOR_API.COMMENTS],
    }),

    createComment: builder.mutation<CommentsState, ICreateCommentQuery>({
      query: (article) => {
        return {
          url: `/comments`,
          method: 'post',
          body: article,
        }
      },
      transformResponse: (responseData: IComment) => {
        return commentsAdapter.addOne(initialState, responseData)
      },
      invalidatesTags: [TAG_TYPES_FOR_API.COMMENTS],
    }),
  }),
})

export const { useGetCommentListQuery, useCreateCommentMutation } = commentSlice

export const selectors = commentsAdapter.getSelectors<
  CommentsState | undefined
>((state) => state ?? initialState)
