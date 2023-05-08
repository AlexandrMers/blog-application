import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentItem as CommentItemComponent } from './CommentItem'

const StoryCommentItem: ComponentMeta<typeof CommentItemComponent> = {
  argTypes: {
    author: {
      defaultValue: {
        name: 'Aleksandr',
        surname: 'Avdeev',
        avatar: '',
      },
    },
    text: {
      defaultValue: 'Тестовый комментарий',
    },
    createdAt: {
      defaultValue: 'Сегодня',
    },
  },
  component: CommentItemComponent,
  title: 'entities/Comment/CommentItem',
}

const Template: ComponentStory<typeof CommentItemComponent> = (args) => {
  return <CommentItemComponent {...args} />
}

export const CommentItem = Template.bind({})
CommentItem.args = {}

export default StoryCommentItem
