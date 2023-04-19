import { useBoolean } from 'shared/hooks'

import {
  ProfileEdit,
  type ProfileFormInterface,
  profileModel,
  ProfileView,
} from 'entities/Profile'
import { Alert, Snackbar } from '@mui/material'

function getFullName({ surname, name }: { name?: string; surname?: string }) {
  return [surname, name].filter(Boolean).join(' ')
}

export const EditableProfile = () => {
  const [isEditMode, editMode, viewMode] = useBoolean()
  const [isOpenNotification, openNotification, closeNotification] = useBoolean()

  const { data, isFetching } = profileModel.useGetProfileQuery()
  const [changeProfileRequest, { isLoading: isLoadingChangeProfile }] =
    profileModel.useChangeProfileMutation()

  const fullName = data
    ? getFullName({ name: data.name, surname: data.surname })
    : ''

  const handleSave = async (data: ProfileFormInterface) => {
    viewMode()

    await changeProfileRequest({
      name: data.name,
      surname: data.surname,
      email: data.email,
    })

    openNotification()
  }

  const isLoadingProfile = isFetching || isLoadingChangeProfile

  if (isEditMode) {
    return (
      <ProfileEdit
        name={data?.name}
        surname={data?.surname}
        email={data?.email}
        onCancel={viewMode}
        onSave={handleSave}
      />
    )
  }

  return (
    <>
      <ProfileView
        email={data?.email}
        avatar={data?.avatar}
        isLoading={isLoadingProfile}
        name={fullName}
        onEdit={editMode}
      />

      <Snackbar
        open={isOpenNotification}
        autoHideDuration={6000}
        onClose={closeNotification}
      >
        <Alert
          color="info"
          severity="success"
          sx={{ width: '100%' }}
          onClose={closeNotification}
        >
          Профиль успешно изменен!
        </Alert>
      </Snackbar>
    </>
  )
}
