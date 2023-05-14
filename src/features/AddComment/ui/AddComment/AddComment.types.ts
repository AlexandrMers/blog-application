import { type FormEvent } from 'react'

export interface AddCommentProps {
  value: string
  disabled?: boolean
  loading?: boolean
  onChange: (value: string) => void
  onSubmit: (e: FormEvent) => void
}
