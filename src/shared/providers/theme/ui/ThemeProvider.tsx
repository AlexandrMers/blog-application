import { type PropsWithChildren, useState } from 'react'
import { Theme, ThemeContext } from '../lib'

export const THEME_KEY_LOCAL_STORAGE = 'theme'

const defaultTheme =
  (localStorage.getItem(THEME_KEY_LOCAL_STORAGE) as Theme) ?? Theme.LIGHT

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(() => defaultTheme)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

    setTheme(newTheme)
    localStorage.setItem(THEME_KEY_LOCAL_STORAGE, newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
