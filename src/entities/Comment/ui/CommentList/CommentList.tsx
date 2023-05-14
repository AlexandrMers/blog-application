import { type IComment } from '../../model/types/commentTypes'

import { CommentSkeleton } from './CommentSkeleton'
import { CommentItem } from '../CommentItem/CommentItem'

import styles from './styles.module.scss'

export function CommentList({
  comments,
  isLoading,
}: {
  isLoading: boolean
  comments: Array<Omit<IComment, 'profileId' | 'articleId'>>
}) {
  return (
    <div className={styles.CommentList}>
      {isLoading ? (
        <CommentSkeleton />
      ) : comments.length ? (
        <ul className={styles.CommentList__ListWrapper}>
          {comments.map(({ id, createdAt, profile: author, text }) => (
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
