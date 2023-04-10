import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Button } from '@mui/material'

import { useBoolean } from '../../hooks'

import { MenuPopover as MenuPopoverComponent } from './MenuPopover'

const StorySpinner: ComponentMeta<typeof MenuPopoverComponent> = {
  argTypes: {
    showElement: {
      defaultValue: (
        <ul style={{ padding: 15 }}>
          <li style={{ padding: 5, listStyle: 'none' }}>item 1</li>
          <li style={{ padding: 5, listStyle: 'none' }}>item 2</li>
          <li style={{ padding: 5, listStyle: 'none' }}>item 3</li>
        </ul>
      ),
    },
  },
  component: MenuPopoverComponent,
  title: 'shared/MenuPopover',
}

const Template: ComponentStory<typeof MenuPopoverComponent> = (args) => {
  const [isOpen, open, close] = useBoolean()

  return (
    <MenuPopoverComponent {...args} handleClosePopover={close} isOpen={isOpen}>
      <Button variant="contained" onClick={open}>
        Открыть поповер
      </Button>
    </MenuPopoverComponent>
  )
}

export const MenuPopover = Template.bind({})
MenuPopover.args = {}

export default StorySpinner
