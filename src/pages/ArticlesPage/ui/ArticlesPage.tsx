import { useTranslation } from 'react-i18next'

import { Typography } from '@mui/material'

export const ArticlesPage = () => {
  const { t } = useTranslation('articles_page')

  return (
    <div>
      <Typography fontSize={24}>{t('title')}</Typography>
    </div>
  )
}
