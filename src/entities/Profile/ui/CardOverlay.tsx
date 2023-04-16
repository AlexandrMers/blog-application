import { type PropsWithChildren } from 'react'

import styles from './styles.module.scss'

export const CardOverlay = ({ children }: PropsWithChildren) => {
  return <article className={styles.ProfileCard}>{children}</article>
}
