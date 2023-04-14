import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ProfileCard as ProfileCardComponent } from './ProfileCard'

const StoryProfileCard: ComponentMeta<typeof ProfileCardComponent> = {
  argTypes: {},
  component: ProfileCardComponent,
  title: 'entities/Profile/ProfileCard',
}

const Template: ComponentStory<typeof ProfileCardComponent> = () => {
  return <ProfileCardComponent />
}

export const ProfileCard = Template.bind({})
ProfileCard.args = {}

export default StoryProfileCard
