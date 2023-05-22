import { ArticleList } from 'entities/Article'
import { useHandlePagination } from '../hooks/useHandlePagination'

import styles from './styles.module.scss'

const LIMIT_ARTICLES_TO_LOAD = 5

export const ArticlesPage = () => {
  const { data, isLoading, isFetching, divForIntersectionRef, wrapperRef } =
    useHandlePagination(LIMIT_ARTICLES_TO_LOAD)

  return (
    <div ref={wrapperRef} className={styles.ArticlePage}>
      <ArticleList
        list={data?.data ?? []}
        isLoading={isLoading || isFetching}
      />
      <div ref={divForIntersectionRef} />
    </div>
  )
}
