import { NavLink } from 'react-router-dom'

import { Grid, GridItem } from 'shared/ui'

import { type IArticleItem } from '../../model'
import { ArticleItem } from '../ArticleItem/ArticleItem'

import styles from './styles.module.scss'
import { memo } from 'react'
import { renderArticleListSkeleton } from './renderSkeleton'

export interface IArticleListProps {
  isLoading?: boolean
  list: IArticleItem[]
}

export const ArticleList = memo(
  ({ isLoading = false, list = [] }: IArticleListProps) => {
    return (
      <section className={styles.ArticleList}>
        <Grid columns={['1fr', '1fr']} gap="30px">
          {list.map(({ title, img, author, type, createdAt, id }, index) => {
            const isFirstElement = index === 0

            return (
              <GridItem
                key={index}
                gridRow={isFirstElement ? ['span', 2] : undefined}
              >
                <NavLink
                  className={styles.ArticleList__Link}
                  to={`/articles/${id}`}
                >
                  <ArticleItem
                    variant={isFirstElement ? 'big' : 'normal'}
                    title={title}
                    author={author}
                    type={type}
                    img={img}
                    createdAt={createdAt}
                  />
                </NavLink>
              </GridItem>
            )
          })}

          {isLoading && renderArticleListSkeleton(3, list.length === 0)}
        </Grid>
      </section>
    )
  }
)
ArticleList.displayName = 'ArticleList'
