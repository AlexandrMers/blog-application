import React from 'react'
import { type TFunction } from 'i18next'

import IconRu from 'shared/assets/icons/flag-ru.svg'
import IconEn from 'shared/assets/icons/flag-en.svg'
import { type SuggestType } from 'shared/types'

const SvgProps: React.SVGProps<SVGSVGElement> = {
  width: 20,
  height: 20,
  style: {
    marginRight: 4,
  },
}

export const OptionsForSelect: (t: TFunction) => SuggestType[] = (
  translation
) => [
  {
    id: 'ru',
    name: 'Русский',
    render: () => {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconRu {...SvgProps} />
          {translation('languages.ru')}
        </div>
      )
    },
  },
  {
    id: 'en',
    name: 'Английский',
    render: () => {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconEn {...SvgProps} />
          {translation('languages.en')}
        </div>
      )
    },
  },
]
