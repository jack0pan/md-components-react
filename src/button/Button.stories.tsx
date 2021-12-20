import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

import '../index.css'

const meta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Filled = Template.bind({})
Filled.args = {
  type: 'filled',
  disabled: false,
  children: 'Button'
}

export const Outlined = Template.bind({})
Outlined.args = {
  type: 'outlined',
  disabled: false,
  children: 'Button'
}

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  disabled: false,
  children: 'Button'
}

export const Elevated = Template.bind({})
Elevated.args = {
  type: 'elevated',
  disabled: false,
  children: 'Button'
}

export const Tonal = Template.bind({})
Tonal.args = {
  type: 'tonal',
  disabled: false,
  children: 'Button'
}

export default meta
