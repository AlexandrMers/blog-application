export interface ProfileViewProps {
  name?: string
  email?: string
  avatar?: string
  isLoading?: boolean
  hiddenEditButton?: boolean
  onEdit: () => void
}
