import { createContext } from 'react'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

interface ThemeContextProps {
  theme?: Theme
  setTheme?: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
