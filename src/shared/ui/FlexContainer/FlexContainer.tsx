import cn from 'classnames'
import { type FlexContainerTypes } from './types'

import styles from './styles.module.scss'

export const FlexContainer = ({
  children,
  justifyContent = 'start',
  className,
}: FlexContainerTypes) => {
  return (
    <div
      className={cn([
        styles.FlexContainer,
        styles[`FlexContainer_${justifyContent}`],
        className,
      ])}
    >
      {children}
    </div>
  )
}
