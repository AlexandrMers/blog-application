import React, { type PropsWithChildren, useEffect } from 'react'
import classNames from 'classnames'

import { Icon } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { sleep } from 'shared/helpers'
import { useBoolean } from 'shared/hooks'
import { Portal } from 'shared/ui'

import styles from './style.module.scss'

type ModalProps = PropsWithChildren<{
  className?: string
  isOpen?: boolean
  onClose: () => void
}>

const ANIMATION_DELAY = 200

export const Modal = (props: ModalProps) => {
  const { className, isOpen: isOpenProp, onClose, children } = props

  const [isMounted, mount, unmount] = useBoolean()
  const [isOpenModal, openModal, closeModal] = useBoolean()

  const handleOpenModal = async () => {
    mount()
    await sleep(ANIMATION_DELAY)
    openModal()
  }

  const handleCloseModal = async () => {
    closeModal()
    await sleep(ANIMATION_DELAY)
    unmount()
  }

  useEffect(() => {
    if (isOpenProp) {
      void handleOpenModal()
      return
    }

    void handleCloseModal()
  }, [isOpenProp])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as Element
    if (element?.className !== styles.Modal__Overlay) {
      return
    }
    onClose()
  }

  const classNameModal = classNames(
    styles.Modal,
    {
      [styles.Modal_open]: isOpenModal,
    },
    className
  )

  if (!isMounted) {
    return null
  }

  return (
    <Portal>
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
  )
}
