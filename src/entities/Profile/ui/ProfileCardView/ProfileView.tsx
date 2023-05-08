import { Avatar, IconButton, Skeleton, type SkeletonProps } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'

import { CardOverlay } from '../CardOverlay'

import { type ProfileViewProps } from './types'

import styles from '../styles.module.scss'

const textSkeletonProps: SkeletonProps = {
  variant: 'text',
  sx: {
    fontSize: '18px',
  },
  width: 120,
}

export const ProfileView = ({
  name,
  email,
  avatar,
  isLoading,
  hiddenEditButton = false,
  onEdit,
}: ProfileViewProps) => {
  return (
    <CardOverlay>
      <div className={styles.ProfileCard__Avatar}>
        {isLoading ? (
          <Skeleton variant="circular" width={60} height={60} />
        ) : (
          <Avatar
            src={avatar}
            alt="avatar"
            variant="circular"
            sx={{ width: 60, height: 60 }}
          />
        )}
      </div>

      <div className={styles.ProfileCard__InfoWrapper}>
        {!hiddenEditButton ? (
          isLoading ? (
            <Skeleton variant="rounded" width={40} height={48} />
          ) : (
            <IconButton onClick={onEdit} color="primary">
              <CreateIcon />
            </IconButton>
          )
        ) : null}

        <div className={styles.ProfileCard__Info}>
          {isLoading ? (
            <>
              <Skeleton {...textSkeletonProps} />
              <Skeleton {...textSkeletonProps} />
            </>
          ) : (
            <>
              <p>{email}</p>
              <p>{name}</p>
            </>
          )}
        </div>
      </div>
    </CardOverlay>
  )
}
