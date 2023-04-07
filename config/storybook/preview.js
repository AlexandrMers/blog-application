import { ThemeDecorator } from '../../src/shared/config/storybook'
import { LanguageDecorator } from '../../src/shared/config/storybook/decorators/languageDecorator'
import { RouteDecorator } from '../../src/shared/config/storybook/decorators/routeDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        {
          title: 'light',
          value: 'app_theme_light',
        },
        {
          title: 'dark',
          value: 'app_theme_dark',
        },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  language: {
    name: 'language',
    defaultValue: 'ru',
    toolbar: {
      icon: '',
      items: [
        {
          title: 'Русский',
          value: 'ru',
        },
        {
          title: 'Английский',
          value: 'en',
        },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export const decorators = [RouteDecorator, LanguageDecorator, ThemeDecorator]
