import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { Appearance, type Types } from './types'

import styles from './styles.module.scss'

export const AppLink = (props: Types) => {
  const {
    className,
    appearance = Appearance.PRIMARY,
    to,
    children,
    ...otherProps
  } = props

  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          styles.AppLink,
          {
            [styles.AppLink_active]: isActive,
            [styles[`AppLink_${appearance}`]]: appearance
          },
          className
        )
      }
      to={to}
      {...otherProps}
    >
      {children}
    </NavLink>
  )
}
