import { Avatar, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'

import styles from './styles.module.scss'

export const ProfileCardView = ({ onEdit }: { onEdit: () => void }) => {
  return (
    <>
      <div className={styles.ProfileCard__Avatar}>
        <Avatar
          alt="avatar"
          variant="circular"
          sx={{ width: 60, height: 60 }}
        />
      </div>

      <div className={styles.ProfileCard__InfoWrapper}>
        <IconButton onClick={onEdit} color="primary">
          <CreateIcon />
        </IconButton>

        <div className={styles.ProfileCard__Info}>
          <p>Aleksandr</p>
          <p>aleksandr@mail.com</p>
        </div>
      </div>
    </>
  )
}
