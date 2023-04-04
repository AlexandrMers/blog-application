import { type FC, useState } from 'react'

import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'
import { Icon } from '@mui/material'

import { LoginModal } from 'features/AuthByName'

import styles from './style.module.scss'

export const UserManagement: FC = () => {
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
      <LoginModal
        isOpenModal={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  )
}
