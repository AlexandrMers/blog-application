import { type CSSProperties } from 'react'
import cn from 'classnames'

import { type IGridItemProps } from './types'

import styles from './styles.module.scss'

export const GridItem = ({ children, gridRow, className }: IGridItemProps) => {
  const cellStyles: CSSProperties = {
    gridRow: gridRow?.join(' '),
  }

  return (
    <div className={cn(styles.Grid__Item, className)} style={cellStyles}>
      {children}
    </div>
  )
}
