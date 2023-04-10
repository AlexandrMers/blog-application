import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'shared/hooks'

import { getAuthData } from 'features/AuthByLogin/model/selectors/getAuthData'
import { Typography } from '@mui/material'

export const PersonalAccountPage = () => {
  const { t } = useTranslation('personal_account_page')

  const auth = useAppSelector(getAuthData)
  const data = auth.authData

  return (
    <div>
      <Typography fontSize={24}>{t('title')}</Typography>

      {data ? (
        <div>
          <p>Пользователь: {data.email}</p>
        </div>
      ) : (
        <p>Необходимо авторизоваться</p>
      )}
    </div>
  )
}
