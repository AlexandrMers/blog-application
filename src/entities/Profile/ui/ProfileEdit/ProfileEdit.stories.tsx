import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ProfileEdit as ProfileCardEditComponent } from './ProfileEdit'

const StoryProfileEdit: ComponentMeta<typeof ProfileCardEditComponent> = {
  argTypes: {},
  component: ProfileCardEditComponent,
  title: 'entities/Profile/ProfileEdit',
}

const Template: ComponentStory<typeof ProfileCardEditComponent> = (args) => {
  return <ProfileCardEditComponent {...args} />
}

export const ProfileEdit = Template.bind({})
ProfileEdit.args = {}

export default StoryProfileEdit
