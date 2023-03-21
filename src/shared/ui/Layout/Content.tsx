import { type PropsWithChildren } from 'react'

import styles from './style.module.scss'

export const Content = ({ children }: PropsWithChildren) => {
  return <div className={styles.LayoutContent}>{children}</div>
}
