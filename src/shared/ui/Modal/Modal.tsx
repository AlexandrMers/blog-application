import { type PropsWithChildren } from 'react'
import classNames from 'classnames'

import { Icon } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { Portal } from '../Portal/Portal'

import styles from './style.module.scss'

type ModalProps = PropsWithChildren<{ isOpen?: boolean, onClose: () => void }>

export const Modal = (props: ModalProps) => {
  const { isOpen, children } = props

  const classNameModal = classNames(styles.Modal__Overlay, {
    [styles.Modal_open]: isOpen
  })

  return <Portal>
    <div className={classNameModal}>
      <div className={styles.Modal__Overlay}>
        <div className={classNames(styles.Modal__Wrapper)}>
          <div className={styles.Modal__Header}>
            <button className={styles.Modal__CloseButton}>
              <Icon fontSize="small" component={CloseIcon} />
            </button>
          </div>
          <div className={styles.Modal__Content}>{children}</div>
        </div>
      </div>
    </div>
  </Portal>
}
