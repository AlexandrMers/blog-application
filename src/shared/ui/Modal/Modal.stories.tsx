import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal as ModalComponent } from './Modal'

const StoryModal: ComponentMeta<typeof ModalComponent> = {
  argTypes: {},
  component: ModalComponent,
  title: 'shared/Modal'
}

const Template: ComponentStory<typeof ModalComponent> = (args) => {
  return <ModalComponent {...args} />
}

export const Modal = Template.bind({})
Modal.args = {}

export default StoryModal
