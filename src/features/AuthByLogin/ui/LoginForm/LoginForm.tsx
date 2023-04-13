import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@mui/material'
import { FlexContainer, Input } from 'shared/ui'
import { getErrorFromResponse } from 'shared/helpers'

import {
  userModel,
  type UserRequestType,
  type UserResponseType,
} from 'entities/User'

import { type LoginFormProps } from '../../types/LoginFormTypes'
import { UserSchema } from '../../schemas/UserSchema'

import styles from './styles.module.scss'

const LoginForm = ({ onSuccessLogin }: LoginFormProps) => {
  const [requestLogin, { isLoading, error }] = userModel.useLoginMutation()

  const { control, handleSubmit, reset } = useForm<UserRequestType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(UserSchema),
  })

  const { t } = useTranslation()

  const errorMessage = getErrorFromResponse(error)

  const onSubmit = async ({ email, password }: UserRequestType) => {
    const result = await requestLogin({
      email,
      password,
    })

    const emailFromResponse = (result as { data: UserResponseType })?.data
      ?.email

    if (emailFromResponse) {
      onSuccessLogin()
      reset()
    }
  }

  return (
    <div className={styles.LoginForm}>
      <h1 className={styles.LoginForm__Title}>{t('authorization.title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.LoginForm__InputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <Input
                disabled={isLoading}
                className={styles.LoginForm__Input}
                label={t('authorization.login')}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className={styles.LoginForm__InputContainer}>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                type="password"
                disabled={isLoading}
                className={styles.LoginForm__Input}
                label={t('authorization.password')}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>
        <FlexContainer justifyContent="end">
          <Button
            disabled={isLoading}
            size="large"
            variant="contained"
            type="submit"
          >
            {t('authorization.enter')}
          </Button>
        </FlexContainer>

        {errorMessage && (
          <p style={{ color: 'red' }}>
            Ошибка с сервера: {errorMessage.data.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginForm
