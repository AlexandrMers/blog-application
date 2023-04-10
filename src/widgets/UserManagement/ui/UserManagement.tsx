import { type FC, type MouseEvent, useState } from 'react'

import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'
import { Avatar, Icon, Menu, MenuItem, Typography } from '@mui/material'

import { useAppDispatch, useAppSelector, useBoolean } from 'shared/hooks'
import { FlexContainer } from 'shared/ui'
import { sleep } from 'shared/helpers'

import { authModel, LoginModal, selectors } from 'features/AuthByLogin'

import styles from './style.module.scss'

export const UserManagement: FC = () => {
  const [isOpenModal, openModal, closeModal] = useBoolean()

  const [anchorElement, setAnchorElement] = useState<Element | null>(null)

  const dispatch = useAppDispatch()
  const auth = useAppSelector(selectors.getAuthData)
  const userName = auth.authData?.email ?? ''

  const handleIconClick = (e: MouseEvent<Element>) => {
    if (userName) {
      setAnchorElement(e.currentTarget)
      return
    }
    openModal()
  }

  const handleClosePopover = () => {
    setAnchorElement(null)
  }

  const handleLogout = async () => {
    handleClosePopover()
    await sleep(300)
    dispatch(authModel.actions.logout())
  }

  const isOpenPopover = Boolean(anchorElement)

  return (
    <div className={styles.UserManagement}>
      <Icon
        fontSize="large"
        className={styles.UserManagement__Icon}
        onClick={handleIconClick}
        component={SupervisedUserCircleRoundedIcon}
      />
      <Menu
        anchorEl={anchorElement}
        open={isOpenPopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={handleClosePopover}
      >
        <FlexContainer justifyContent="center">
          <Avatar alt="user">{userName.slice(0, 2)}</Avatar>
        </FlexContainer>
        <Typography sx={{ p: 2 }}>{userName}</Typography>
        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
      </Menu>

      <LoginModal isOpenModal={isOpenModal} handleCloseModal={closeModal} />
    </div>
  )
}
