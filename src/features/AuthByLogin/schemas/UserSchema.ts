import * as Yup from 'yup'

export const UserSchema = Yup.object({
  email: Yup.string()
    .required('Обязательное поле')
    .email('Должен быть корректный email'),
  password: Yup.string().required('Обязательное поле'),
})
