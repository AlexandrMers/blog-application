import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentList as CommentListComponent } from './CommentList'

const StoryCommentList: ComponentMeta<typeof CommentListComponent> = {
  argTypes: {},
  component: CommentListComponent,
  title: 'entities/Comment/CommentList',
}

const Template: ComponentStory<typeof CommentListComponent> = (args) => {
  return <CommentListComponent {...args} />
}

export const CommentListLoading = Template.bind({})
CommentListLoading.args = {
  isLoading: true,
}

export const CommentList = Template.bind({})
CommentList.args = {
  comments: [
    {
      profile: {
        name: 'Aleksandr',
        surname: 'Avdeev',
        avatar: '',
        email: 'merser@mail.com',
        id: 1,
      },
      createdAt: '8.05.2023',
      text: 'Привет, мой друг. Отличная статья',
      id: 1,
    },
    {
      profile: {
        name: 'Jordan',
        surname: 'Michael',
        avatar: '',
        email: 'michael@mail.com',
        id: 1,
      },
      createdAt: '8.05.2023',
      text: "I'm not expected that the article will be so interesting",
      id: 1,
    },
  ],
}

export default StoryCommentList
