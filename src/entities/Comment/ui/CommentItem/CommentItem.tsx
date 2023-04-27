import { Avatar, Typography } from '@mui/material'

import styles from './styles.module.scss'

export function CommentItem({
  author,
  createdAt,
  text,
}: {
  author: {
    name: string
    surname: string
    avatar: string
  }
  text: string
  createdAt: string
}) {
  const shortName = author.name.slice(0, 2)

  return (
    <article className={styles.CommentItem}>
      <header className={styles.CommentItem__Header}>
        <Avatar
          variant="circular"
          sx={{ width: 40, height: 40 }}
          src={author.avatar}
        >
          {shortName}
        </Avatar>

        <div className={styles.CommentItem__Info}>
          <Typography>
            {author.name} {author.surname}
          </Typography>
          <time className={styles.CommentItem__Date}>{createdAt}</time>
        </div>
      </header>

      <p className={styles.CommentItem__Body}>{text}</p>
    </article>
  )
}
