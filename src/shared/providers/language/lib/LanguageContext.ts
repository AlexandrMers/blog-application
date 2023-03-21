import { createContext } from 'react'

export type LanguageType = 'ru' | 'en'

export interface LanguageContextInterface {
  lang: LanguageType
  changeLanguage: (lang: LanguageContextInterface['lang'], namespace?: string) => void
}

export const LanguageContext = createContext<LanguageContextInterface>({
  lang: '' as LanguageType,
  changeLanguage: () => {}
})
