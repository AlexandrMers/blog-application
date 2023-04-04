import { type ChangeEvent, type FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FlexContainer, Input } from 'shared/ui'

import { Button } from '@mui/material'

import styles from './styles.module.scss'

export const LoginForm = () => {
  const [userData, setUserData] = useState({
    login: undefined,
    password: undefined,
  })

  const { t } = useTranslation()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('userData in submit -> ', {
      login: userData.login,
      password: userData.password,
    })
  }

  return (
    <div className={styles.LoginForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.LoginForm__InputContainer}>
          <Input
            name="login"
            className={styles.LoginForm__Input}
            value={userData.login}
            onChange={handleChange}
            label={t('authorization.login')}
          />
        </div>

        <div className={styles.LoginForm__InputContainer}>
          <Input
            name="password"
            className={styles.LoginForm__Input}
            value={userData.password}
            onChange={handleChange}
            label={t('authorization.password')}
            type="password"
          />
        </div>
        <FlexContainer justifyContent="end">
          <Button size="large" variant="contained" type="submit">
            {t('authorization.enter')}
          </Button>
        </FlexContainer>
      </form>
    </div>
  )
}
