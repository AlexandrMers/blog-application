import { type ChangeEvent, type FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@mui/material'
import { FlexContainer, Input } from 'shared/ui'
import { getErrorFromResponse } from 'shared/helpers'

import { userModel, type UserRequestType } from 'entities/User'

import styles from './styles.module.scss'

export const LoginForm = () => {
  const [login, { isLoading, error }] = userModel.useLoginMutation()

  const [userData, setUserData] = useState<UserRequestType>({
    email: '',
    password: '',
  })
  const { t } = useTranslation()

  const errorMessage = getErrorFromResponse(error)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    void login({
      email: userData.email,
      password: userData.password,
    })
  }

  return (
    <div className={styles.LoginForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.LoginForm__InputContainer}>
          <Input
            disabled={isLoading}
            name="email"
            className={styles.LoginForm__Input}
            value={userData.email}
            onChange={handleChange}
            label={t('authorization.login')}
          />
        </div>

        <div className={styles.LoginForm__InputContainer}>
          <Input
            disabled={isLoading}
            name="password"
            className={styles.LoginForm__Input}
            value={userData.password}
            onChange={handleChange}
            label={t('authorization.password')}
            type="password"
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
