import { Grid, GridItem } from 'shared/ui'

import {
  ArticleItem,
  type IArticleCardFields,
} from '../ArticleItem/ArticleItem'

import styles from './styles.module.scss'

export interface IArticleListProps {
  list: IArticleCardFields[]
}

export const ArticleList = ({ list }: IArticleListProps) => {
  return (
    <section className={styles.ArticleList}>
      <Grid columns={['1fr', '1fr']} gap="30px">
        {list.map(({ title, image, authorName, category }, index) => {
          const isFirstElement = index === 0

          return (
            <GridItem
              key={index}
              gridRow={isFirstElement ? ['span', 2] : undefined}
            >
              <ArticleItem
                variant={isFirstElement ? 'big' : 'normal'}
                title={title}
                image={image}
                authorName={authorName}
                category={category}
              />
            </GridItem>
          )
        })}
      </Grid>
    </section>
  )
}
