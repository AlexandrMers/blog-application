import { type ChangeEvent } from 'react'

import { Typography } from '@mui/material'

import { Box, Input } from 'shared/ui'
import {
  type ReducersList,
  useAppDispatch,
  useAppSelector,
  useAsyncReducerLoader,
} from 'shared/hooks'

import { testModel } from 'features/TestAsyncReducers'

const initialReducers: ReducersList = {
  testReducer: testModel.testSlice.reducer,
}

function TestReducerModal() {
  useAsyncReducerLoader({
    removeAfterUnmount: false,
    reducers: initialReducers,
  })

  const field1Value = useAppSelector((state) => state.testReducer?.field1)
  const field2Value = useAppSelector((state) => state.testReducer?.field2)

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
    </>
  )
}

export default TestReducerModal
