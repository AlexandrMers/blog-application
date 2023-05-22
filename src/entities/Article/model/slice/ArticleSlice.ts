import { apiInstance } from 'shared/config/api'

import { type IArticleItem, type IArticleResponse } from '../types/articleType'

const mapResponseArticleToClient = ({
  img,
  blocks,
  subtitle,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  createdAt,
  profile,
  type,
  title,
  id,
}: IArticleResponse): IArticleItem => ({
  createdAt,
  blocks,
  img,
  id,
  author: profile,
  type,
  title,
  subtitle,
})

export const articleSlice = apiInstance.injectEndpoints({
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getArticlesList: builder.query<
      {
        data: IArticleItem[]
        hasMore: boolean
        currentPage: number
      },
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => {
        return {
          url: `/articles?_expand=profile&_page=${page}&_limit=${limit}`,
          method: 'get',
        }
      },
      transformResponse: (response: {
        hasMore: boolean
        perPage: number
        total: number
        currentPage: number
        data: IArticleResponse[]
      }) => ({
        data: response.data.map(mapResponseArticleToClient),
        hasMore: response.hasMore,
        currentPage: response.currentPage,
      }),
      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}-${queryArgs.limit}`,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      },
      merge: (currentCacheData, responseData, { arg }) => {
        if (arg.page > 1) {
          currentCacheData.hasMore = responseData.hasMore
          currentCacheData.data.push(...responseData.data)
          return currentCacheData
        }

        return responseData
      },
    }),
    getArticleById: builder.query<IArticleItem, number>({
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

export const { useGetArticlesListQuery, useGetArticleByIdQuery } = articleSlice
