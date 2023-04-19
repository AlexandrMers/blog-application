import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Avatar, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DoneIcon from '@mui/icons-material/Done'
import PortraitIcon from '@mui/icons-material/Portrait'

import { Box, Input } from 'shared/ui'

import { ProfileSchema } from '../schemas/ProfileSchema'

import { CardOverlay } from '../CardOverlay'

import { type ProfileEditProps, type ProfileFormInterface } from './types'

import styles from '../styles.module.scss'

export const ProfileEdit = ({
  surname,
  name,
  email,
  disabledForm = false,
  onCancel,
  onSave,
}: ProfileEditProps) => {
  const { control, reset, handleSubmit } = useForm<ProfileFormInterface>({
    resolver: yupResolver(ProfileSchema),
    defaultValues: {
      name,
      email,
      surname,
    },
  })

  const handleCancel = () => {
    reset()
    onCancel()
  }

  return (
    <CardOverlay>
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

      <form onSubmit={handleSubmit(onSave)}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <Box>
              <Input
                {...field}
                disabled={disabledForm}
                error={invalid}
                label="Имя"
                helperText={error?.message}
                variant="outlined"
              />
            </Box>
          )}
        />

        <Controller
          name="surname"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <Box>
              <Input
                {...field}
                disabled={disabledForm}
                error={invalid}
                label="Фамилия"
                helperText={error?.message}
                variant="outlined"
              />
            </Box>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <Box>
              <Input
                {...field}
                disabled={disabledForm}
                error={invalid}
                label="email"
                helperText={error?.message}
                variant="outlined"
              />
            </Box>
          )}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={handleCancel}
            color="error"
            disabled={disabledForm}
          >
            <CloseIcon />
          </IconButton>

          <IconButton type="submit" color="success" disabled={disabledForm}>
            <DoneIcon />
          </IconButton>
        </div>
      </form>
    </CardOverlay>
  )
}
