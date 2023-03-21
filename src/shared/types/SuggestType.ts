import { type ReactNode } from 'react'

export interface SuggestType {
  id: string | number
  name: string
  render?: (name: string) => ReactNode
}
