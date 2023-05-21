import { type FC, type ReactElement } from 'react'
import cn from 'classnames'

import { CategoryDictionary, type CategoryType } from '../../model'

import styles from './styles.module.scss'

export interface IArticleCardFields {
  image: string
  title: string
  category: CategoryType
  authorName: string
}

export interface IArticleItemProps extends IArticleCardFields {
  variant?: 'normal' | 'big'
}

export const ArticleItem: FC<IArticleItemProps> = ({
  variant = 'normal',
  image,
  title,
  category,
  authorName,
}: IArticleItemProps): ReactElement => {
  const categoryName = CategoryDictionary[category]
  const categoryClassName = cn(styles.ArticleItem__Category, {
    [styles[`ArticleItem__Category_${category}`]]: true,
  })

  return (
    <article
      className={cn(styles.ArticleItem, {
        [styles.ArticleItem_big]: variant === 'big',
      })}
    >
      <img className={styles.ArticleItem__Image} src={image} alt={title} />

      <div className={styles.ArticleItem__InfoWrapper}>
        <h3 className={styles.ArticleItem__Title}>
          Почему сериал «Офис» стал культовым ?
        </h3>

        <div className={styles.ArticleItem__MetaInfo}>
          <span className={categoryClassName}>{categoryName}</span>
          <span className={styles.ArticleItem__Author}>{authorName}</span>
        </div>
      </div>
    </article>
  )
}
