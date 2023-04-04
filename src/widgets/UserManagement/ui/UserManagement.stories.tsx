import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { UserManagement as UserManagementComponent } from './UserManagement'

const StoryModal: ComponentMeta<typeof UserManagementComponent> = {
  argTypes: {},
  component: UserManagementComponent,
  title: 'widgets/UserManagement',
}

const Template: ComponentStory<typeof UserManagementComponent> = (args) => {
  return <UserManagementComponent {...args} />
}

export const UserManagement = Template.bind({})
UserManagement.args = {}

export default StoryModal
