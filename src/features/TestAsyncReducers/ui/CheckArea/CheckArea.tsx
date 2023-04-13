import { Suspense } from 'react'

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { IconButton } from '@mui/material'

import { Modal, Spinner } from 'shared/ui'
import { useBoolean } from 'shared/hooks'

import { TestReducerModal } from '../TestReducerModal'

export const CheckArea = () => {
  const [isOpen, open, close] = useBoolean()

  return (
    <>
      <IconButton onClick={open}>
        <AutoFixHighIcon />
      </IconButton>

      <Modal isOpen={isOpen} onClose={close}>
        <Suspense fallback={<Spinner />}>
          <TestReducerModal />
        </Suspense>
      </Modal>
    </>
  )
}
