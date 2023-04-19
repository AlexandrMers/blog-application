export interface ProfileFormInterface {
  email: string
  name: string
  surname: string
}

export interface ProfileEditProps {
  name?: string
  surname?: string
  email?: string
  disabledForm?: boolean
  onCancel: () => void
  onSave: (data: ProfileFormInterface) => void
}
