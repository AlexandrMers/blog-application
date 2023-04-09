import { useTranslation } from 'react-i18next'

import { Button } from '@mui/material'
import { FlexContainer, Input } from 'shared/ui'
import { getErrorFromResponse } from 'shared/helpers'

import { userModel, type UserRequestType } from 'entities/User'

import styles from './styles.module.scss'
import { Controller, useForm } from 'react-hook-form'

export const LoginForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_requestLogin, { isLoading, error }] = userModel.useLoginMutation()

  const { control, handleSubmit } = useForm<UserRequestType>({
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  })

  const { t } = useTranslation()

  const errorMessage = getErrorFromResponse(error)

  // {
  //   // e.preventDefault()
  //   // void login({
  //   //   email: userData.email,
  //   //   password: userData.password,
  //   // })
  // }

  function onSubmit(values: UserRequestType): void {
    console.log('values check in onSubmit', values)
  }

  return (
    <div className={styles.LoginForm}>
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
