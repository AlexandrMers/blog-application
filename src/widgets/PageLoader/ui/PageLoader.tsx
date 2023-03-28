import { type FC } from 'react'
import cn from 'classnames'

import { Spinner } from 'shared/ui'

import styles from './styles.module.scss'

export const PageLoader: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(styles.PageLoader, className)}>
      <Spinner />
    </div>
  )
}
