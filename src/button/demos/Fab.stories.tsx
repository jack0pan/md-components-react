import * as React from 'react';
import { ComponentStoryFn, ComponentMeta } from '@storybook/react';
import Fab from '../Fab';
import { FabPage } from './FabPage';

const meta: ComponentMeta<typeof Fab> = {
  title: 'Components/Buttons/FAB',
  component: Fab,
  parameters: {
    docs: {
      page: FabPage,
    },
  },
  argTypes: { onClick: { action: 'clicked' } },
};

const Template: ComponentStoryFn<typeof Fab> = args => (
  <div style={{ display: 'flex', gap: 48 }}>
    <Fab {...args} icon="edit" />
    <Fab {...args} icon="edit" disabled />
  </div>
);

export const Surface = Template.bind({});
Surface.args = {
  color: 'surface',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
};

export default meta;
