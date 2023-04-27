import { Skeleton } from '@mui/material'

import { renderSkeletonText } from 'shared/helpers'

import styles from './styles.module.scss'

export function CommentSkeleton() {
  return (
    <>
      <div className={styles.Skeleton}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton className={styles.Skeleton__Text} width={150} height={20} />
      </div>

      {renderSkeletonText(2)}
    </>
  )
}
