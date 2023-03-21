import Select, { type SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material'

import { type SelectBoxPropTypes } from './types'
import { type SuggestType } from '../../types'

export const SelectBox = ({ options, value, onChange }: SelectBoxPropTypes) => {
  const handleChange = (e: SelectChangeEvent<SuggestType['id']>) => {
    onChange(e.target.value)
  }

  return (
    <Select value={value} onChange={handleChange}>
      {options.map(({ id, name, render }) => (
        <MenuItem key={id} value={id}>
          {(render != null) ? render(name) : name}
        </MenuItem>
      ))}
    </Select>
  )
}
