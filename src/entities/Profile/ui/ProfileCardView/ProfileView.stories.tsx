import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ProfileView as ProfileViewComponent } from './ProfileView'

const StoryProfileView: ComponentMeta<typeof ProfileViewComponent> = {
  argTypes: {
    email: {
      defaultValue: 'data@example.com',
    },
    avatar: {
      defaultValue: '',
    },
    name: {
      defaultValue: 'Александр Авдеев',
    },
  },
  component: ProfileViewComponent,
  title: 'entities/Profile/ProfileView',
}

const Template: ComponentStory<typeof ProfileViewComponent> = (args) => {
  return <ProfileViewComponent {...args} />
}

export const ProfileView = Template.bind({})
ProfileView.args = {}

export const ProfileViewLoading = Template.bind({})
ProfileViewLoading.args = {
  isLoading: true,
}

export default StoryProfileView
