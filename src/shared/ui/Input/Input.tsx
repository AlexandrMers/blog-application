import classNames from 'classnames'

import TextField from '@mui/material/TextField'

import { type InputProps } from './types'

import styles from './styles.module.scss'

export const Input = ({ className, ...otherProps }: InputProps) => {
  return (
    <TextField
      {...otherProps}
      className={classNames(styles.Input, className)}
      variant="standard"
    />
  )
}
