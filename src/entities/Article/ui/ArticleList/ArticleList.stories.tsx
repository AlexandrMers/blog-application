import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleList as ArticleListComponent } from './ArticleList'

import { type IArticleCardFields } from '../ArticleItem/ArticleItem'

import ImageOffice from 'shared/assets/images/michael.jpg'
import ImageBee from 'shared/assets/images/bee.jpg'

const FAKE_ARTICLES: IArticleCardFields[] = [
  {
    image: ImageBee,
    title: '10 советов по уходу за садом',
    category: 'Садоводство',
    authorName: 'Екатерина Иванова',
  },
  {
    image: ImageOffice,
    title: 'Искусство кулинарии: рецепты классических блюд',
    category: 'Кулинария',
    authorName: 'Александр Петров',
  },
  {
    image: ImageOffice,
    title: 'Топ-10 книг для летнего отдыха',
    category: 'Книги',
    authorName: 'Мария Сидорова',
  },
  {
    image: ImageOffice,
    title: 'Как выбрать правильные тренажеры для домашней тренировки',
    category: 'Фитнес',
    authorName: 'Иван Козлов',
  },
  {
    image: ImageOffice,
    title: 'Путешествие в Токио: открытие восточной культуры',
    category: 'Путешествия',
    authorName: 'Анастасия Смирнова',
  },
  {
    image: ImageOffice,
    title: 'Ремонт ванной комнаты: советы профессионалов',
    category: 'Ремонт и дизайн',
    authorName: 'Дмитрий Попов',
  },
]

const StoryArticleList: ComponentMeta<typeof ArticleListComponent> = {
  argTypes: {},
  component: ArticleListComponent,
  title: 'entities/ArticleList',
}

const Template: ComponentStory<typeof ArticleListComponent> = (args) => {
  return (
    <div
      style={{
        background: '#EFEFEF',
        padding: '30px',
      }}
    >
      <ArticleListComponent {...args} />
    </div>
  )
}

export const ArticleList = Template.bind({})
ArticleList.args = {
  list: FAKE_ARTICLES,
}

export default StoryArticleList
