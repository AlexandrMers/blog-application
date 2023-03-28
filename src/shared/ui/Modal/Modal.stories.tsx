import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal as ModalComponent } from './Modal'

const StoryModal: ComponentMeta<typeof ModalComponent> = {
  argTypes: {
    children: {
      defaultValue:
        ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus deleniti ea eum excepturi exercitationem fugit impedit magni nemo nesciunt non odit quae quasi qui quisquam quod sapiente, velit veritatis! Cupiditate deserunt impedit inventore maiores quibusdam quisquam repellendus rerum! Ad consectetur dolorem expedita fugit magni nulla officia porro possimus rem repellendus? Aperiam, corporis dolores et, illo modi nesciunt nihil obcaecati omnis quibusdam reprehenderit tempore, vero vitae voluptates! Aut dolor, et facere harum quaerat recusandae reprehenderit veritatis vitae. Beatae corporis cum dicta doloribus earum est fuga harum ipsum itaque, magnam minus placeat quae quas, quasi quidem quo sunt tempora veritatis vitae?',
    },
  },
  component: ModalComponent,
  title: 'shared/Modal',
}

const Template: ComponentStory<typeof ModalComponent> = (args) => {
  return <ModalComponent {...args} />
}

export const Modal = Template.bind({})
Modal.args = {}

export default StoryModal
