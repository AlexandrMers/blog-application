import { Skeleton } from '@mui/material'
import { useParams } from 'react-router'

import { renderSkeletonText } from 'shared/helpers'

import { ArticleDetail, articleModel } from 'entities/Article'
import { CommentList, commentModel } from 'entities/Comment'

import styles from './styles.module.scss'

function ArticleDetailSkeleton() {
  return (
    <>
      <Skeleton width={160} />
      <Skeleton width={180} />
      <Skeleton width={180} />
      <Skeleton variant="rectangular" height={300} />

      {renderSkeletonText(5)}
    </>
  )
}

export const ArticleDetailPage = () => {
  const params = useParams()
  const articleId = Number(params.id)

  const { data, isFetching } = articleModel.useGetArticleByIdQuery(articleId)
  const { comments, isFetching: isFetchingComments } =
    commentModel.useGetCommentListQuery(articleId, {
      selectFromResult: (result) => {
        return {
          ...result,
          comments: commentModel.selectors.selectAll(result.data),
        }
      },
    })

  return (
    <div className={styles.ArticleDetailPage}>
      {isFetching && <ArticleDetailSkeleton />}
      {!!data && !isFetching && <ArticleDetail {...data} />}

      <div
        className={styles.ArticleDetailPage__Comments}
        style={{ marginTop: 25 }}
      >
        <CommentList
          isLoading={isFetchingComments}
          comments={Array.isArray(comments) ? comments : []}
        />
      </div>
    </div>
  )
}
