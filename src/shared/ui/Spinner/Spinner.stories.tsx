import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Spinner } from './Spinner'

const StorySpinner: ComponentMeta<typeof Spinner> = {
  argTypes: {},
  component: Spinner,
  title: 'shared/Spinner'
}

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const SpinnerComponent = Template.bind({})

export default StorySpinner
