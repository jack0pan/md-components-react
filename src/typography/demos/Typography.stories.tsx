import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Typography from '../Typography'
import { TypographyPage } from './TypographyPage'

import '../style'
import './Typography.stories.css'

const meta: ComponentMeta<typeof Typography> = {
  title: 'Styles/Typography',
  component: Typography,
  parameters: {
    docs: {
      page: TypographyPage
    }
  }
}

const Template: ComponentStory<typeof Typography> = (args) => (
  <div className='typography-demo'>
    <Typography {...args} size='large'>{`${args.type} Large - Roboto`}</Typography>
    <Typography {...args} size='medium'>{`${args.type} Medium - Roboto`}</Typography>
    <Typography {...args} size='small'>{`${args.type} Small - Roboto`}</Typography>
  </div>
)

export const Display = Template.bind({})
Display.args = {
  type: 'display'
}

export const Headline = Template.bind({})
Headline.args = {
  type: 'headline'
}

export const Title = Template.bind({})
Title.args = {
  type: 'title'
}

export const Label = Template.bind({})
Label.args = {
  type: 'label'
}

export const Body = Template.bind({})
Body.args = {
  type: 'body'
}

export default meta
