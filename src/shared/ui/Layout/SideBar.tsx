import { type PropsWithChildren } from 'react'

import { Box } from 'shared/ui'

import styles from './style.module.scss'

export const SideBar = ({ children }: PropsWithChildren) => {
  return (
    <Box className={styles.SideBar} insideSize={'s'}>
      {children}
    </Box>
  )
}
