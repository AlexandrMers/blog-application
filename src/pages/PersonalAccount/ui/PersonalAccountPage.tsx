import { useTranslation } from 'react-i18next'

import { Typography } from '@mui/material'

import { useAppSelector } from 'shared/hooks'

import { selectors } from 'features/AuthByLogin'
import { EditProfile } from 'features/EditProfile'

export const PersonalAccountPage = () => {
  const { t } = useTranslation('personal_account_page')

  const auth = useAppSelector(selectors.getAuthData)
  const authData = auth.authData

  return (
    <div>
      <Typography fontSize={24}>{t('title')}</Typography>

      {authData ? <EditProfile /> : <p>Необходимо авторизоваться</p>}
    </div>
  )
}
