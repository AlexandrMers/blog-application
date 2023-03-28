import { useState } from 'react'

import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'
import { Icon } from '@mui/material'

import { Modal } from 'shared/ui'

import styles from './style.module.scss'

export const UserManagement = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <div className={styles.UserManagement}>
      <Icon
        fontSize="large"
        className={styles.UserManagement__Icon}
        onClick={handleOpenModal}
        component={SupervisedUserCircleRoundedIcon}
      />
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        Здесь будет окно авторизации
      </Modal>
    </div>
  )
}
