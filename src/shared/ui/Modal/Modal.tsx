import React, { type PropsWithChildren } from 'react'
import classNames from 'classnames'

import { Icon } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { Portal } from '../Portal/Portal'

import styles from './style.module.scss'

type ModalProps = PropsWithChildren<{ isOpen?: boolean, onClose: () => void }>

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props

  const classNameModal = classNames(styles.Modal, {
    [styles.Modal_open]: isOpen
  })

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as Element
    if (element?.className !== styles.Modal__Overlay) {
      return
    }
    onClose()
  }

  return <Portal>
    <div className={classNameModal}>
      <div className={styles.Modal__Overlay} onClick={handleOverlayClick}>
        <div className={classNames(styles.Modal__Container)}>
          <div className={styles.Modal__Header}>
            <button className={styles.Modal__CloseButton} onClick={onClose}>
              <Icon fontSize="small" component={CloseIcon} />
            </button>
          </div>
          <div className={styles.Modal__Content}>{children}</div>
        </div>
      </div>
    </div>
  </Portal>
}
