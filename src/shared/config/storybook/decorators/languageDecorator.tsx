import { type PropsWithChildren, Suspense, useEffect } from 'react'
import { type Story, type StoryContext } from '@storybook/react'

import { LanguageProvider, type LanguageType, useLanguage } from '../../language'

const LanguageSwitcher = ({ children, lang }: PropsWithChildren<{ lang: LanguageType }>) => {
  const { changeLanguage } = useLanguage()

  useEffect(() => {
    changeLanguage(lang)
  }, [lang])

  return <>{children}</>
}

export const LanguageDecorator = (Story: Story, context: StoryContext) => {
  const { language } = context.globals

  return (
    <Suspense fallback="">
      <LanguageProvider>
        <LanguageSwitcher lang={language as LanguageType}>
          <Story />
        </LanguageSwitcher>
      </LanguageProvider>
    </Suspense>

  )
}
