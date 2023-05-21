import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ImageOffice from 'shared/assets/images/michael.jpg'
import ImageBee from 'shared/assets/images/bee.jpg'

import { ArticleList as ArticleListComponent } from './ArticleList'

import { type IArticleCardFields } from '../ArticleItem/ArticleItem'
import { CategoryType } from '../../model'

const FAKE_ARTICLES: IArticleCardFields[] = [
  {
    image: ImageBee,
    title: '10 советов по уходу за садом',
    category: CategoryType.HEALTH,
    authorName: 'Екатерина Иванова',
  },
  {
    image: ImageOffice,
    title: 'Искусство кулинарии: рецепты классических блюд',
    category: CategoryType.ANALYZE,
    authorName: 'Александр Петров',
  },
  {
    image: ImageOffice,
    title: 'Топ-10 книг для летнего отдыха',
    category: CategoryType.ANALYZE,
    authorName: 'Мария Сидорова',
  },
  {
    image: ImageOffice,
    title: 'Как выбрать правильные тренажеры для домашней тренировки',
    category: CategoryType.ANALYZE,
    authorName: 'Иван Козлов',
  },
  {
    image: ImageOffice,
    title: 'Путешествие в Токио: открытие восточной культуры',
    category: CategoryType.TRAVEL,
    authorName: 'Анастасия Смирнова',
  },
  {
    image: ImageOffice,
    title: 'Ремонт ванной комнаты: советы профессионалов',
    category: CategoryType.DESIGN,
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
  isLoading: false,
}

export const ArticleListFirstLoading = Template.bind({})
ArticleListFirstLoading.args = {
  list: [],
  isLoading: true,
}

export const ArticleListWithPaginationLoading = Template.bind({})
ArticleListWithPaginationLoading.args = {
  list: FAKE_ARTICLES,
  isLoading: true,
}

export default StoryArticleList
