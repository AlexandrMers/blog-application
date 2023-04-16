import * as Yup from 'yup'

import {
  REQUIRED_EMAIL_FORMAT,
  REQUIRED_FIELD,
} from 'shared/constants/validationErrors'

export const UserSchema = Yup.object({
  email: Yup.string().required(REQUIRED_FIELD).email(REQUIRED_EMAIL_FORMAT),
  password: Yup.string().required(REQUIRED_FIELD),
})
