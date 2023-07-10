import { type FC, type ReactElement } from 'react'
import cn from 'classnames'

import { CategoryDictionary, type IArticleItem } from '../../model'

import styles from './styles.module.scss'

export interface IArticleItemProps
  extends Omit<IArticleItem, 'blocks' | 'subtitle' | 'id'> {
  variant?: 'normal' | 'big'
}

export const ArticleItem: FC<IArticleItemProps> = ({
  variant = 'normal',
  img,
  title,
  type,
  author: { name, surname },
  createdAt,
}: IArticleItemProps): ReactElement => {
  const categoryName = CategoryDictionary[type]
  const categoryClassName = cn(styles.ArticleItem__Category, {
    [styles[`ArticleItem__Category_${type}`]]: true,
  })

  return (
    <article
      className={cn(styles.ArticleItem, {
        [styles.ArticleItem_big]: variant === 'big',
      })}
    >
      <img className={styles.ArticleItem__Image} src={img} alt={title} />

      <div className={styles.ArticleItem__InfoWrapper}>
        <h3 className={styles.ArticleItem__Title}>{title}</h3>

        <div className={styles.ArticleItem__MetaInfo}>
          <span className={categoryClassName}>{categoryName}</span>
          <span className={styles.ArticleItem__Author}>
            {name} {surname}
          </span>
        </div>
      </div>
    </article>
  )
}
