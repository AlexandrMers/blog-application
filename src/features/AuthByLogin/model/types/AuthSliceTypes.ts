import { type DefaultResponseError } from 'shared/helpers'

export interface AuthSlice {
  isLoading: boolean
  error?: DefaultResponseError | null
  authData?: {
    email: string
    id: number
    token: string
  }
}
