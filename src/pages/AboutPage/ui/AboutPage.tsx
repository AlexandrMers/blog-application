import { useTranslation } from 'react-i18next'

export const AboutPage = () => {
  const { t } = useTranslation('about_page')

  return <p>{t('about_title')}</p>
}
