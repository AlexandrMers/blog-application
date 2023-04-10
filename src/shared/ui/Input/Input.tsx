import { forwardRef } from 'react'
import classNames from 'classnames'

import TextField from '@mui/material/TextField'

import { type InputProps } from './types'

import styles from './styles.module.scss'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <TextField
        {...otherProps}
        ref={ref}
        className={classNames(styles.Input, className)}
        variant="standard"
      />
    )
  }
)
Input.displayName = 'Input'
