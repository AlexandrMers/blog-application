import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { LoginModal as LoginModalComponent } from './LoginModal'

const StoryModal: ComponentMeta<typeof LoginModalComponent> = {
  argTypes: {
    isOpenModal: {
      defaultValue: true,
    },
  },
  component: LoginModalComponent,
  title: 'features/AuthByLogin',
}

const Template: ComponentStory<typeof LoginModalComponent> = (args) => {
  return <LoginModalComponent {...args} />
}

export const LoginModal = Template.bind({})
LoginModal.args = {}

export default StoryModal
