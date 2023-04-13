import React, { type FC } from 'react'
import { type LoginFormProps } from '../../types/LoginFormTypes'

export const LoginForm = React.lazy<FC<LoginFormProps>>(
  async () => await import('./LoginForm')
)
