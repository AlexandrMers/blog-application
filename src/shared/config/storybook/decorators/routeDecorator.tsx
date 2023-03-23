import { BrowserRouter } from 'react-router-dom'
import { type StoryContext } from '@storybook/react'

export const RouteDecorator = (story: any, context: StoryContext) => {
  return (
      <BrowserRouter>
        {story()}
      </BrowserRouter>
  )
}
