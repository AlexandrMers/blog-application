import React, { type FC } from 'react'

import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'
import { Avatar, Icon, MenuItem, Typography } from '@mui/material'

import { FlexContainer, MenuPopover, Spinner } from 'shared/ui'
import { sleep } from 'shared/helpers'
import { useAppDispatch, useAppSelector, useBoolean } from 'shared/hooks'

import { authModel, LoginModal, selectors } from 'features/AuthByLogin'

import styles from './style.module.scss'

export const UserManagement: FC = () => {
  const [isOpenModal, openModal, closeModal] = useBoolean()
  const [isOpenMenuPopover, openMenuPopover, closeMenuPopover] = useBoolean()

  const dispatch = useAppDispatch()
  const auth = useAppSelector(selectors.getAuthData)
  const userName = auth.authData?.email ?? ''
  const userShortName = userName.slice(0, 2)

  const handleIconClick = () => {
    if (userName) {
      openMenuPopover()
      return
    }
    openModal()
  }

  const handleLogout = async () => {
    closeMenuPopover()
    await sleep(300)
    dispatch(authModel.actions.logout())
  }

  return (
    <div className={styles.UserManagement}>
      <MenuPopover
        isOpen={isOpenMenuPopover}
        handleClosePopover={closeMenuPopover}
        showElement={
          <div>
            <FlexContainer justifyContent="center">
              <Avatar alt="user">{userShortName}</Avatar>
            </FlexContainer>
            <Typography sx={{ p: 2 }}>{userName}</Typography>
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
          </div>
        }
      >
        <Icon
          fontSize="large"
          className={styles.UserManagement__Icon}
          component={SupervisedUserCircleRoundedIcon}
          onClick={handleIconClick}
        />
      </MenuPopover>

      <React.Suspense fallback={<Spinner />}>
        <LoginModal isOpenModal={isOpenModal} handleCloseModal={closeModal} />
      </React.Suspense>
    </div>
  )
}
