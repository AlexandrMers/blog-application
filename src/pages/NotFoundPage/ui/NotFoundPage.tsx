import { type FC } from 'react'

import styles from './style.module.scss'
import { useTranslation } from 'react-i18next'

export const NotFoundPage: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.NotFoundPage}>
      <p>{t('not_found_page.title')}</p>
    </div>
  )
}
