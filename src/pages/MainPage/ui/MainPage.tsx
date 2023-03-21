import { useTranslation } from 'react-i18next'

export const MainPage = () => {
  const { t } = useTranslation('main_page')

  return <p>{t('main_title')}</p>
}
