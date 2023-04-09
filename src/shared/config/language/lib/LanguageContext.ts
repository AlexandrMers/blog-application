import { createContext } from 'react'

export type LanguageType = 'ru' | 'en'

export interface LanguageContextInterface {
  lang: LanguageType
}

export const LanguageContext = createContext<LanguageContextInterface>({
  lang: '' as LanguageType,
})
