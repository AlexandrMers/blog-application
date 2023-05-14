import React, { type FC } from 'react'

import TextField from '@mui/material/TextField'
import LoadingButton from '@mui/lab/LoadingButton'
import SendIcon from '@mui/icons-material/Send'

import { type AddCommentProps } from './AddComment.types'

import styles from './styles.module.scss'

export const AddComment: FC<AddCommentProps> = (props) => {
  const { disabled, loading, value, onChange: onChangeProp, onSubmit } = props

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeProp(e.target.value)
  }

  const inputDisabled = [disabled, loading].some(Boolean)

  return (
    <form className={styles.AddComment} onSubmit={onSubmit}>
      <TextField
        className={styles.AddComment__Input}
        disabled={inputDisabled}
        fullWidth
        label="Напишите комментарий..."
        maxRows={10}
        multiline
        size="small"
        value={value}
        onChange={onChange}
      />
      <LoadingButton
        loading={loading}
        disabled={disabled}
        variant="outlined"
        type="submit"
        endIcon={<SendIcon />}
        size="small"
      >
        Отправить
      </LoadingButton>
    </form>
  )
}
