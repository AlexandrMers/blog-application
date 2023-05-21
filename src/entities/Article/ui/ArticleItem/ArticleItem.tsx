import { type FC, type ReactElement } from 'react'

import styles from './styles.module.scss'
import cn from 'classnames'

export interface IArticleCardFields {
  image: string
  title: string
  category: string
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
          <span
            className={cn(styles.ArticleItem__Category, {
              [styles.ArticleItem__Category_analyze]: true,
            })}
          >
            {category}
          </span>
          <span className={styles.ArticleItem__Author}>{authorName}</span>
        </div>
      </div>
    </article>
  )
}
