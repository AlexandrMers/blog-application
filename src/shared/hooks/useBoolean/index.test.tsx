import { act, renderHook } from '@testing-library/react'
import { useBoolean } from './index'

function renderUseBooleanHook(initialValue = false) {
  return renderHook(() => {
    const [value, valueOn, valueOff] = useBoolean(initialValue)

    return {
      value,
      valueOn,
      valueOff,
    }
  })
}

describe('useBoolean', () => {
  test('initialValue=true -> value=true', () => {
    const { result } = renderUseBooleanHook(true)
    expect(result.current.value).toBeTruthy()
  })

  test('initialValue=false, вызвали valueOn -> value=true', () => {
    const { result } = renderUseBooleanHook()
    expect(result.current.value).toBeFalsy()

    act(() => {
      result.current.valueOn()
    })

    expect(result.current.value).toBeTruthy()
  })

  test('initialValue=true, вызвали valueOff -> value=false', () => {
    const { result } = renderUseBooleanHook(true)
    expect(result.current.value).toBeTruthy()

    act(() => {
      result.current.valueOff()
    })

    expect(result.current.value).toBeFalsy()
  })
})
