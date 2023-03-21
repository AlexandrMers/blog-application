import { type SuggestType } from '../../types'

export interface SelectBoxPropTypes {
  options: SuggestType[]
  value: SuggestType['id']
  onChange: (value: SuggestType['id']) => void
}
