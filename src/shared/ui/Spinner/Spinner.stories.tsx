import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Spinner as SpinnerComponent } from './Spinner'

const StorySpinner: ComponentMeta<typeof SpinnerComponent> = {
  argTypes: {},
  component: SpinnerComponent,
  title: 'shared/Spinner',
}

const Template: ComponentStory<typeof SpinnerComponent> = (args) => (
  <SpinnerComponent {...args} />
)

export const Spinner = Template.bind({})
Spinner.args = {}

export default StorySpinner
