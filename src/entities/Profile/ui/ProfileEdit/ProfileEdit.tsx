import { Avatar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DoneIcon from '@mui/icons-material/Done'
import PortraitIcon from '@mui/icons-material/Portrait'

import styles from '../styles.module.scss'

import { Box, Input } from 'shared/ui'

export const ProfileEdit = ({
  onCancel,
  onSuccess,
}: {
  onCancel: () => void
  onSuccess: () => void
}) => {
  return (
    <article className={styles.ProfileCard}>
      <div className={styles.ProfileCard__Avatar}>
        <Avatar alt="avatar" variant="circular" sx={{ width: 60, height: 60 }}>
          <IconButton
            color="primary"
            size="small"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PortraitIcon />
          </IconButton>
        </Avatar>
      </div>

      <Box>
        <Input variant="outlined" value="Aleksandr" />
      </Box>

      <Box>
        <Input variant="outlined" value="aleksandr@mail.com" />
      </Box>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onCancel} color="error">
          <CloseIcon />
        </IconButton>

        <IconButton onClick={onSuccess} color="success">
          <DoneIcon />
        </IconButton>
      </div>
    </article>
  )
}
