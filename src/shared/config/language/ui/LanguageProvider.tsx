import React, { type PropsWithChildren, useState } from 'react'
import { LanguageContext, type LanguageType } from '../lib'

// ~ import config of config library
import '../config'
import { useTranslation } from 'react-i18next'

export const LANGUAGE_KEY_LOCAL_STORAGE = 'language'

const defaultLanguage =
  (localStorage.getItem(LANGUAGE_KEY_LOCAL_STORAGE) as LanguageType) ?? 'ru'

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const { i18n: { changeLanguage, language } } = useTranslation()

  console.log('language ->', language)

  const [lang, setLang] = useState(() => defaultLanguage ?? language)

  const handleLanguage = (lang: LanguageType) => {
    void changeLanguage(lang)
    setLang(lang)
    localStorage.setItem(LANGUAGE_KEY_LOCAL_STORAGE, lang)
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        changeLanguage: handleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
