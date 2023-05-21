import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleItem as ArticleItemComponent } from './ArticleItem'

import ImageOffice from 'shared/assets/images/michael.jpg'
import ImageBee from 'shared/assets/images/bee.jpg'

const StoryArticleItem: ComponentMeta<typeof ArticleItemComponent> = {
  argTypes: {
    category: {
      defaultValue: 'Анализ',
    },
    title: {
      defaultValue: 'Почему офис стал культовым сериалом?',
    },
    image: {
      defaultValue: ImageOffice,
    },
    authorName: {
      defaultValue: 'Иванов Иван',
    },
  },
  component: ArticleItemComponent,
  title: 'entities/ArticleItem',
}

const Template: ComponentStory<typeof ArticleItemComponent> = (args) => {
  return (
    <div
      style={{
        background: '#EFEFEF',
        height: '100vh',
        padding: '30px',
      }}
    >
      <div style={{ maxWidth: 567, margin: '0 auto' }}>
        <ArticleItemComponent {...args} />
      </div>
    </div>
  )
}

export const ArticleItem = Template.bind({})
ArticleItem.args = {}

export const ArticleItemBig = Template.bind({})
ArticleItemBig.args = {
  variant: 'big',
  image: ImageBee,
}

export default StoryArticleItem
