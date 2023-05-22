import { type CSSProperties } from 'react'
import cn from 'classnames'

import { type IGridProps } from './types'

import styles from './styles.module.scss'

export const Grid = ({ children, gap, columns, className }: IGridProps) => {
  const gridStyles: CSSProperties = {
    gap,
    gridTemplateColumns: columns?.join(' '),
  }

  return (
    <div className={cn(styles.Grid, className)} style={gridStyles}>
      {children}
    </div>
  )
}
