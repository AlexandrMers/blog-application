import { useTranslation } from 'react-i18next'

import { Typography } from '@mui/material'

import { useAppSelector } from 'shared/hooks'

import { selectors } from 'features/AuthByLogin'
import { EditableProfile } from 'features/EditableProfile'
import { useParams } from 'react-router-dom'

export const ProfilePage = () => {
  const { t } = useTranslation('profile_page')
  const { userId } = useParams()

  const auth = useAppSelector(selectors.getAuthData)
  const authData = auth.authData

  const userIsMe = String(authData?.id) === userId

  console.log('isAuthUserOnPage ->', userIsMe)

  return (
    <div>
      <Typography fontSize={24}>{t('title')}</Typography>

      <EditableProfile userId={String(userId)} canEditInformation={userIsMe} />
    </div>
  )
}
