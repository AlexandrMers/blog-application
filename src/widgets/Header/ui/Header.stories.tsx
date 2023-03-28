import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Header as HeaderComponent } from './Header'

const StoryHeader: ComponentMeta<typeof HeaderComponent> = {
  argTypes: {},
  component: HeaderComponent,
  title: 'widgets/Header',
}

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent {...args} />
)

export const HeaderWithLeftElement = Template.bind({})
HeaderWithLeftElement.args = {
  leftElement: (
    <div
      style={{
        fontSize: '16px',
        padding: '5px',
        color: 'var(--text-color)',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Left Element
    </div>
  ),
}

export const HeaderWithoutLeftElement = Template.bind({})
HeaderWithoutLeftElement.args = {}

export default StoryHeader
