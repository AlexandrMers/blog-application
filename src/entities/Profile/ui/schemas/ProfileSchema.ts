import * as Yup from 'yup'

import { type ProfileFormInterface } from '../ProfileEdit/types'

import {
  REQUIRED_EMAIL_FORMAT,
  REQUIRED_FIELD,
} from 'shared/constants/validationErrors'

export const ProfileSchema = Yup.object<ProfileFormInterface>({
  name: Yup.string().required(REQUIRED_FIELD),
  surname: Yup.string().required(REQUIRED_FIELD),
  email: Yup.string().required(REQUIRED_FIELD).email(REQUIRED_EMAIL_FORMAT),
})
