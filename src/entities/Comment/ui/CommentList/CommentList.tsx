import { Typography } from '@mui/material'

import { type ICommentClient } from '../../model/types/commentTypes'

import { CommentSkeleton } from './CommentSkeleton'
import { CommentItem } from '../CommentItem/CommentItem'

import styles from './styles.module.scss'

export function CommentList({
  comments,
  isLoading,
}: {
  isLoading: boolean
  comments: ICommentClient[]
}) {
  return (
    <div className={styles.CommentList}>
      {/* TODO - этот тайтл надо будет вынести выше, т.к. будет фича для добавления комментариев */}
      <Typography className={styles.CommentList__Title} fontSize={24}>
        Комментарии
      </Typography>

      {isLoading ? (
        <CommentSkeleton />
      ) : comments.length ? (
        <ul className={styles.CommentList__ListWrapper}>
          {comments.map(({ id, createdAt, author, text }) => (
            <li className={styles.CommentList__Item} key={id}>
              <CommentItem author={author} text={text} createdAt={createdAt} />
            </li>
          ))}
        </ul>
      ) : (
        'Нет комментариев'
      )}
    </div>
  )
}
