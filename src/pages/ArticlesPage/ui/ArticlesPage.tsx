import { useTranslation } from 'react-i18next'

import picture from 'shared/assets/images/person.png'

export const ArticlesPage = () => {
  const { t } = useTranslation('articles_page')

  return (
    <div>
      <div>{t('articles_title')}</div>
      <img src={picture} alt="" />
    </div>
  )
}
