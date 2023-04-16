import { useBoolean } from 'shared/hooks'

import { ProfileEdit, ProfileView } from 'entities/Profile'

export const EditProfile = () => {
  const [isEditMode, editMode, viewMode] = useBoolean()

  return (
    <>
      {isEditMode ? (
        <ProfileEdit onCancel={viewMode} onSuccess={viewMode} />
      ) : (
        <ProfileView onEdit={editMode} />
      )}
    </>
  )
}
