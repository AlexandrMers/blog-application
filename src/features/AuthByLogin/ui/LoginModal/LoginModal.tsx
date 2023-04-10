import { Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'

import { useTranslation } from 'react-i18next'
import { Alert, Snackbar } from '@mui/material'

import { useBoolean } from 'shared/hooks'

import { type LoginModalProps } from './types'

import styles from './styles.module.scss'

export const LoginModal = ({
  isOpenModal,
  handleCloseModal,
}: LoginModalProps) => {
  const [isOpenNotification, openNotification, closeNotification] = useBoolean()

  const { t } = useTranslation()

  const handleSuccessLogin = () => {
    handleCloseModal()
    openNotification()
  }

  return (
    <>
      <Modal
        className={styles.LoginModal}
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      >
        <h1 className={styles.LoginModal__Title}>{t('authorization.title')}</h1>
        <LoginForm onSuccessLogin={handleSuccessLogin} />
      </Modal>

      <Snackbar
        open={isOpenNotification}
        autoHideDuration={6000}
        onClose={closeNotification}
      >
        <Alert
          severity="success"
          sx={{ width: '100%' }}
          onClose={closeNotification}
        >
          Авторизация прошла успешно!
        </Alert>
      </Snackbar>
    </>
  )
}
