import { type PropsWithChildren } from 'react'

import styles from './style.module.scss'

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={styles.LayoutContainer}>{children}</div>
}
