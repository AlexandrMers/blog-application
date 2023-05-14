import React, { type FC, useState } from 'react'

import { commentModel } from 'entities/Comment'

import { AddComment } from '../AddComment/AddComment.component'
import { type AddCommentContainerProps } from './AddCommentContainer.types'

export const AddCommentContainer: FC<AddCommentContainerProps> = ({
  userId,
  articleId,
}) => {
  const [value, setValue] = useState<string>('')

  const [createCommentRequest, { isLoading }] =
    commentModel.useCreateCommentMutation()

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!value) {
      return
    }

    await createCommentRequest({
      profileId: userId,
      articleId,
      text: value,
    })
    setValue('')
  }

  return (
    <AddComment
      value={value}
      loading={isLoading}
      onChange={setValue}
      onSubmit={handleSubmitComment}
    />
  )
}
