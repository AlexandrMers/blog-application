import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AddComment as AddCommentComponent } from './AddComment.component'

const StoryAddComment: ComponentMeta<typeof AddCommentComponent> = {
  argTypes: {},
  component: AddCommentComponent,
  title: 'features/AddComment',
}

const Template: ComponentStory<typeof AddCommentComponent> = (args) => {
  return (
    <div
      style={{
        padding: 25,
      }}
    >
      <AddCommentComponent {...args} />
    </div>
  )
}

export const AddComment = Template.bind({})
AddComment.args = {}

export const AddCommentDisabled = Template.bind({})
AddCommentDisabled.args = {
  disabled: true,
}

export const AddCommentLoading = Template.bind({})
AddCommentLoading.args = {
  loading: true,
}

export default StoryAddComment
