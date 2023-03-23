import { ThemeDecorator } from '../../src/shared/config/storybook'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark'],
      showName: true,
      dynamicTitle: true
    }
  }
}

export const decorators = [ThemeDecorator]
