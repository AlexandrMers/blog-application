import { type PropsWithChildren, Suspense, useEffect } from 'react'
import { type StoryContext } from '@storybook/react'

import {
  LanguageProvider,
  type LanguageType,
  useLanguage,
} from '../../../src/shared/config/language'

const LanguageSwitcher = ({
  children,
  lang,
}: PropsWithChildren<{ lang: LanguageType }>) => {
  const { changeLanguage } = useLanguage()

  useEffect(() => {
    changeLanguage(lang)
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
