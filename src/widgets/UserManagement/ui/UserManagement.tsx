import { type FC, useState } from 'react'

import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'
import { Alert, Icon, Snackbar } from '@mui/material'

import { useAppSelector } from 'shared/hooks'

import { LoginModal } from 'features/AuthByLogin'
import { getAuthData } from 'features/AuthByLogin/model/selectors/getAuthData'

import styles from './style.module.scss'

export const UserManagement: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isSuccessNotify, setIsSuccessNotify] = useState(false)

  const auth = useAppSelector(getAuthData)
  console.log('auth ->', auth)

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleSuccessLogin = () => {
    console.log('run here !!!')
    handleCloseModal()

    setIsSuccessNotify(true)
  }

  const handleCloseNotification = () => {
    setIsSuccessNotify(false)
  }

  return (
    <div className={styles.UserManagement}>
      <Icon
        fontSize="large"
        className={styles.UserManagement__Icon}
        onClick={handleOpenModal}
        component={SupervisedUserCircleRoundedIcon}
      />
      <LoginModal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
        onSuccessLogin={handleSuccessLogin}
      />

      <Snackbar
        open={isSuccessNotify}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <Alert
          severity="success"
          sx={{ width: '100%' }}
          onClose={handleCloseNotification}
        >
          Авторизация прошла успешно!
        </Alert>
      </Snackbar>
    </div>
  )
}
