import { type ChangeEvent } from 'react'

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { IconButton, Typography } from '@mui/material'

import { Box, Input, Modal } from 'shared/ui'
import { useAppDispatch, useAppSelector, useBoolean } from 'shared/hooks'

import { testModel } from 'features/TestAsyncReducers'

export const CheckArea = () => {
  const [isOpen, open, close] = useBoolean()

  const field1Value = useAppSelector((state) => state.testReducer.field1)
  const field2Value = useAppSelector((state) => state.testReducer.field2)

  const dispatch = useAppDispatch()

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      testModel.testSlice.actions.changeField({
        name: e.target.name as any,
        value: e.target.value,
      })
    )
  }

  return (
    <>
      <IconButton onClick={open}>
        <AutoFixHighIcon />
      </IconButton>

      <Modal isOpen={isOpen} onClose={close}>
        <Typography>Для теста асинхронного редьюсера</Typography>

        <Box>
          <Input
            label="store_field_1"
            name="field1"
            value={field1Value}
            onChange={handleFieldChange}
          />
        </Box>

        <Box>
          <Input
            label="store_field_2"
            name="field2"
            value={field2Value}
            onChange={handleFieldChange}
          />
        </Box>
      </Modal>
    </>
  )
}
