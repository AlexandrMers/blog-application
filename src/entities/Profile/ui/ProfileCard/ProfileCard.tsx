import { useBoolean } from 'shared/hooks'

import { ProfileCardView } from './ProfileCardView'
import { ProfileCardEditable } from './ProfileCardEditable'

import styles from './styles.module.scss'

// TODO - это, скорее всего, нужно будет перетащить в features,
//  и управлять этими состояниями оттуда,
//  в зависимости от определенных состояний модели
export const ProfileCard = () => {
  const [isEdit, onEdit, offEdit] = useBoolean()

  return (
    <article className={styles.ProfileCard}>
      {isEdit ? (
        <ProfileCardEditable onCancel={offEdit} onSuccess={offEdit} />
      ) : (
        <ProfileCardView onEdit={onEdit} />
      )}
    </article>
  )
}
