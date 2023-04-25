import React from 'react'
import { Skeleton } from '@mui/material'

import { ArticleDetail, articleModel } from 'entities/Article'

import styles from './styles.module.scss'

export const ArticleDetailPage = () => {
  const { data, isFetching } = articleModel.useGetArticleByIdQuery(1)

  if (isFetching) {
    return (
      <div className={styles.ArticleDetailPage}>
        <Skeleton width={160} />
        <Skeleton width={180} />
        <Skeleton width={180} />
        <Skeleton variant="rectangular" width={718} height={500} />

        {new Array(15).fill(null).map((_, index) => (
          <Skeleton key={index} width={718} />
        ))}
      </div>
    )
  }

  return (
    <>
      {data && (
        <div className={styles.ArticleDetailPage}>
          <ArticleDetail {...data} />
        </div>
      )}
    </>
  )
}
