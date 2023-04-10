import { useState } from 'react'

type FunctionVoidType = () => void

export const useBoolean = (
  initialState: boolean = false
): [boolean, FunctionVoidType, FunctionVoidType] => {
  const [value, setValue] = useState(initialState)

  const valueOn = () => {
    setValue(true)
  }

  const valueOff = () => {
    setValue(false)
  }

  return [value, valueOn, valueOff]
}
