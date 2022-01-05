import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../index'
import { ButtonPage } from './ButtonPage'

import '../style'
import './Button.stories.css'

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: ButtonPage
    }
  }
}

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <div className='button-demo'>
      <Button {...args}>Enabled</Button>
      <Button {...args} disabled>Disabled</Button>
    </div>
    <div className='button-demo'>
      <Button {...args} icon='add'>Enabled</Button>
      <Button {...args} icon='add' disabled>Disabled</Button>
    </div>
  </>
)

export const Filled = Template.bind({})
Filled.args = {
  type: 'filled'
}

export const Outlined = Template.bind({})
Outlined.args = {
  type: 'outlined'
}

export const Text = Template.bind({})
Text.args = {
  type: 'text'
}

export const Elevated = Template.bind({})
Elevated.args = {
  type: 'elevated'
}

export const Tonal = Template.bind({})
Tonal.args = {
  type: 'tonal'
}

export default meta
