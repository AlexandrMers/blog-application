import cn from 'classnames'

import { type BoxTypes } from './types'

import styles from './styles.module.scss'

export const Box = ({ insideSize = 'm', className, children }: BoxTypes) => {
  return (
    <div className={cn(styles.Box, [styles[`Box_${insideSize}`]], className)}>
      {children}
    </div>
  )
}
