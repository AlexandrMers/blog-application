import { Box, Skeleton, Typography } from '@mui/material'
import { useParams } from 'react-router'

import { renderSkeletonText } from 'shared/helpers'
import { useAppSelector } from 'shared/hooks'

import { ArticleDetail, articleModel } from 'entities/Article'
import { CommentList, commentModel } from 'entities/Comment'

import { AddComment } from 'features/AddComment'
import { selectors } from 'features/AuthByLogin'

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

  const { authData } = useAppSelector(selectors.getAuthData)
  const authorizedUserId = authData?.id

  const { data, isFetching } = articleModel.useGetArticleByIdQuery(articleId)
  const { comments, isLoading: isFetchingComments } =
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
        <Typography
          className={styles.ArticleDetailPage__CommentsTitle}
          fontSize={24}
        >
          Комментарии
        </Typography>

        {authorizedUserId && (
          <Box marginBottom="20px">
            <AddComment articleId={articleId} userId={authorizedUserId} />
          </Box>
        )}

        <CommentList isLoading={isFetchingComments} comments={comments} />
      </div>
    </div>
  )
}
