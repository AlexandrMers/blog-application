import React, { type PropsWithChildren, useMemo } from 'react'
import { LanguageContext, type LanguageType } from '../lib'

// ~ import config of config library
import '../config'
import { useTranslation } from 'react-i18next'

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const {
    i18n: { language },
  } = useTranslation()

  const lang = useMemo(() => {
    return ['ru', 'en'].includes(language) ? language : 'ru'
  }, [language])

  return (
    <LanguageContext.Provider
      value={{
        lang: lang as LanguageType,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
