import { type PropsWithChildren, Suspense, useEffect } from 'react'
import { type StoryContext } from '@storybook/react'

import { useTranslation } from 'react-i18next'

import { LanguageProvider, type LanguageType } from 'shared/config/language'

const LanguageSwitcher = ({
  children,
  lang,
}: PropsWithChildren<{ lang: LanguageType }>) => {
  const {
    i18n: { changeLanguage },
  } = useTranslation()

  useEffect(() => {
    void changeLanguage(lang)
  }, [lang])

  return <>{children}</>
}

export const LanguageDecorator = (story: any, context: StoryContext) => {
  const { language } = context.globals

  return (
    <LanguageProvider>
      <Suspense fallback="">
        <LanguageSwitcher lang={language as LanguageType}>
          {story()}
        </LanguageSwitcher>
      </Suspense>
    </LanguageProvider>
  )
}
