import { type DefaultResponseError } from './types'

// стандартизация ошибок с сервера... (для примера)
export const isErrorCheckDefault = (
  error: Record<string, any>
): error is DefaultResponseError => {
  return (
    typeof error === 'object' &&
    'status' in error &&
    'data' in error &&
    'message' in error.data
  )
}

export const getErrorFromResponse = (
  error?: any
): DefaultResponseError | undefined => {
  if (isErrorCheckDefault(error)) {
    return {
      status: error?.status,
      data: {
        message: error.data.message,
      },
    }
  }

  return error
}
