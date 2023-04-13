import { Suspense } from 'react'
import { Alert, Snackbar } from '@mui/material'

import { Modal, Spinner } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm.async'

import { useBoolean } from 'shared/hooks'

import { type LoginModalProps } from './types'

export const LoginModal = ({
  isOpenModal,
  handleCloseModal,
}: LoginModalProps) => {
  const [isOpenNotification, openNotification, closeNotification] = useBoolean()

  const handleSuccessLogin = () => {
    handleCloseModal()
    openNotification()
  }

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <Suspense fallback={<Spinner />}>
          <LoginForm onSuccessLogin={handleSuccessLogin} />
        </Suspense>
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
