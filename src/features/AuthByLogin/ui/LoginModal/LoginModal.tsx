import { Modal } from 'shared/ui'
import { LoginForm } from '../LoginForm/LoginForm'

import { type LoginModalProps } from './types'

import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'

export const LoginModal = ({
  isOpenModal,
  onSuccessLogin,
  handleCloseModal,
}: LoginModalProps) => {
  const { t } = useTranslation()

  return (
    <Modal
      className={styles.LoginModal}
      isOpen={isOpenModal}
      onClose={handleCloseModal}
    >
      <h1 className={styles.LoginModal__Title}>{t('authorization.title')}</h1>
      <LoginForm onSuccessLogin={onSuccessLogin} />
    </Modal>
  )
}
