import { BrowserRouter } from 'react-router-dom'
import { type Story, type StoryContext } from '@storybook/react'

export const RouteDecorator = (Story: Story, context: StoryContext) => {
  return (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
  )
}
