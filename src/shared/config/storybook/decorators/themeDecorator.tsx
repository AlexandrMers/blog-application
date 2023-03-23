import { type PropsWithChildren, useEffect } from 'react'

import { type Story, type StoryContext } from '@storybook/react'

import { type Theme, ThemeProvider, useTheme } from '../../theme'

import '../../theme/styles/index.scss'

const ThemeSwitcher = ({ children, theme }: PropsWithChildren<{ theme: Theme }>) => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme)
  }, [theme])

  return (
    <div style={{
      background: 'var(--bg-color)',
      height: '100vh'
    }}>
      {children}
    </div>
  )
}

export const ThemeDecorator = (Story: Story, context: StoryContext) => {
  const { theme } = context.globals

  return (
    <ThemeProvider>
      <ThemeSwitcher theme={theme}>
        <Story />
      </ThemeSwitcher>
    </ThemeProvider>
  )
}
