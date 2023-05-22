import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ImageOffice from 'shared/assets/images/michael.jpg'
import ImageBee from 'shared/assets/images/bee.jpg'

import { ArticleList as ArticleListComponent } from './ArticleList'

import { CategoryType, type IArticleItem } from '../../model'

const FAKE_ARTICLES: IArticleItem[] = [
  {
    id: 1,
    blocks: [],
    createdAt: '',
    subtitle: '',
    img: ImageBee,
    title: '10 советов по уходу за садом',
    type: CategoryType.HEALTH,
    author: {
      name: 'Екатерина',
      surname: 'Смирнова',
      id: 1,
      avatar: '',
      email: '',
    },
  },
  {
    id: 2,
    blocks: [],
    createdAt: '',
    subtitle: '',
    img: ImageOffice,
    title: 'Искусство кулинарии: рецепты классических блюд',
    type: CategoryType.ANALYZE,
    author: {
      name: 'Александр',
      surname: 'Петров',
      id: 2,
      avatar: '',
      email: '',
    },
  },
  {
    id: 3,
    blocks: [],
    createdAt: '',
    subtitle: '',
    img: ImageOffice,
    title: 'Топ-10 книг для летнего отдыха',
    type: CategoryType.ANALYZE,
    author: {
      name: 'Мария',
      surname: 'Сидорова',
      avatar: '',
      email: '',
      id: 3,
    },
  },
  {
    id: 4,
    blocks: [],
    createdAt: '',
    subtitle: '',
    img: ImageOffice,
    title: 'Как выбрать правильные тренажеры для домашней тренировки',
    type: CategoryType.ANALYZE,
    author: {
      name: 'Иван',
      surname: 'Козлов',
      email: '',
      avatar: '',
      id: 4,
    },
  },
  {
    id: 5,
    blocks: [],
    createdAt: '',
    subtitle: '',
    img: ImageOffice,
    title: 'Путешествие в Токио: открытие восточной культуры',
    type: CategoryType.TRAVEL,
    author: {
      name: 'Анастасия',
      surname: 'Смирнова',
      email: '',
      avatar: '',
      id: 5,
    },
  },
  {
    id: 6,
    blocks: [],
    createdAt: '',
    subtitle: '',
    img: ImageOffice,
    title: 'Ремонт ванной комнаты: советы профессионалов',
    type: CategoryType.DESIGN,
    author: {
      name: 'Дмитрий',
      surname: 'Попов',
      email: '',
      avatar: '',
      id: 6,
    },
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
