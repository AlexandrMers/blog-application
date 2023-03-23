import React, { type PropsWithChildren, useState } from 'react'
import { LanguageContext, type LanguageContextInterface, type LanguageType } from '../lib'

// ~ import config of config library
import '../config'

export const LANGUAGE_KEY_LOCAL_STORAGE = 'language'

const defaultLanguage =
  (localStorage.getItem(LANGUAGE_KEY_LOCAL_STORAGE) as LanguageType) ?? 'ru'

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<LanguageContextInterface['lang']>(defaultLanguage)

  const changeLanguage = (lang: LanguageType) => {
    setLang(lang)
    localStorage.setItem(LANGUAGE_KEY_LOCAL_STORAGE, lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        changeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
