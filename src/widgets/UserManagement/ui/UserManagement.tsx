import {
  Children,
  cloneElement,
  type FC,
  type PropsWithChildren,
  type ReactElement,
  useRef,
} from 'react'

import { type PopoverOrigin } from '@mui/material/Popover/Popover'
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded'
import { Avatar, Icon, Menu, MenuItem, Typography } from '@mui/material'

import { FlexContainer } from 'shared/ui'
import { sleep } from 'shared/helpers'
import { useAppDispatch, useAppSelector, useBoolean } from 'shared/hooks'

import { authModel, LoginModal, selectors } from 'features/AuthByLogin'

import styles from './style.module.scss'

export const MenuPopover = ({
  children,
  isOpen = false,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  },
  showElement,
  handleClosePopover,
}: PropsWithChildren<{
  isOpen?: boolean
  showElement: ReactElement
  anchorOrigin?: PopoverOrigin
  handleClosePopover: () => void
}>) => {
  const refOfAnchorElement = useRef<Element | null>(null)

  return (
    <>
      {Children.map(children, (child: ReactElement) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        cloneElement(child, {
          ...child.props,
          ref: refOfAnchorElement,
        })
      )}

      <Menu
        anchorEl={refOfAnchorElement.current as Element}
        open={isOpen}
        anchorOrigin={anchorOrigin}
        onClose={handleClosePopover}
      >
        {showElement}
      </Menu>
    </>
  )
}

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
          <>
            <FlexContainer justifyContent="center">
              <Avatar alt="user">{userShortName}</Avatar>
            </FlexContainer>
            <Typography sx={{ p: 2 }}>{userName}</Typography>
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
          </>
        }
      >
        <Icon
          fontSize="large"
          className={styles.UserManagement__Icon}
          component={SupervisedUserCircleRoundedIcon}
          onClick={handleIconClick}
        />
      </MenuPopover>

      <LoginModal isOpenModal={isOpenModal} handleCloseModal={closeModal} />
    </div>
  )
}
