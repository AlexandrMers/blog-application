import { type PropsWithChildren, useEffect } from 'react'

import { type StoryContext } from '@storybook/react'

import { type Theme, ThemeProvider, useTheme } from '../../theme'

import '../../theme/styles/index.scss'
import classNames from 'classnames'

const ThemeSwitcher = ({ children, theme }: PropsWithChildren<{ theme: Theme }>) => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  return (
    <div className={classNames('app', theme)}>
      {children}
    </div>
  )
}

export const ThemeDecorator = (story: any, context: StoryContext) => {
  const { theme } = context.globals

  return (
    <ThemeProvider>
        <ThemeSwitcher theme={theme}>
          {story()}
        </ThemeSwitcher>
    </ThemeProvider>
  )
}
