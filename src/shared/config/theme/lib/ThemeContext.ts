import { createContext } from 'react'

export enum Theme {
  DARK = 'app_theme_dark',
  LIGHT = 'app_theme_light',
}

interface ThemeContextProps {
  theme?: Theme
  setTheme: (theme?: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: () => {},
})
