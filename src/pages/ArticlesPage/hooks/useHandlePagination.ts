import { useCallback, useRef, useState } from 'react'

import { useInfiniteScroll } from 'shared/hooks'

import { articleModel } from 'entities/Article'

export function useHandlePagination(limit: number) {
  const [currentPage, setCurrentPage] = useState(1)

  const {
    currentData: data,
    isLoading,
    isFetching,
  } = articleModel.useGetArticlesListQuery({
    page: currentPage,
    limit,
  })

  const divForIntersectionRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const onHandleNextPage = useCallback(() => {
    if (!data?.hasMore) {
      return undefined
    }
    setCurrentPage(data.currentPage + 1)
  }, [data?.currentPage, data?.hasMore])

  useInfiniteScroll({
    callback: onHandleNextPage,
    triggerRef: divForIntersectionRef,
    wrapperRef,
  })

  return { data, isLoading, isFetching, divForIntersectionRef, wrapperRef }
}
