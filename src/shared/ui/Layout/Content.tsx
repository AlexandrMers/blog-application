import { type PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

interface IContentProps extends PropsWithChildren {
  className?: string
  background?: string
}

export const Content = ({ children, className, background }: IContentProps) => {
  return (
    <div
      className={cn(styles.LayoutContent, className)}
      style={{
        background,
      }}
    >
      {children}
    </div>
  )
}
