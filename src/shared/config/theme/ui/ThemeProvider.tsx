import { type PropsWithChildren, useEffect, useState } from 'react'
import { Theme, ThemeContext } from '../lib'

import './themes/index.scss'

export const THEME_KEY_LOCAL_STORAGE = 'theme'

const defaultTheme =
  (localStorage.getItem(THEME_KEY_LOCAL_STORAGE) as Theme) ?? Theme.LIGHT

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => defaultTheme)

  const handleBodyClassName = (theme: Theme) => {
    document.body.className = theme
  }

  useEffect(() => {
    handleBodyClassName(defaultTheme ?? Theme.LIGHT)
  }, [])

  const toggleTheme = (themeParam?: Theme) => {
    const newTheme =
      themeParam ?? (theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)

    setTheme(newTheme)
    handleBodyClassName(newTheme)
    localStorage.setItem(THEME_KEY_LOCAL_STORAGE, newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
