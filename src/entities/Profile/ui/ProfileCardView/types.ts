export interface ProfileViewProps {
  name?: string
  email?: string
  avatar?: string
  isLoading?: boolean
  onEdit: () => void
}
