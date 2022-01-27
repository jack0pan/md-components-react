import * as React from 'react';
import { ComponentStoryFn, ComponentMeta } from '@storybook/react';
import ExtendedFab from '../ExtendedFab';
import { ExtendedFabPage } from './ExtendedFabPage';

const meta: ComponentMeta<typeof ExtendedFab> = {
  title: 'Components/Buttons/ExtendedFAB',
  component: ExtendedFab,
  parameters: {
    docs: {
      page: ExtendedFabPage,
    },
  },
};

const Template: ComponentStoryFn<typeof ExtendedFab> = args => (
  <div style={{ display: 'flex', gap: 26 }}>
    <ExtendedFab {...args} icon="edit" labelText="Enabled" />
    <ExtendedFab {...args} icon="edit" labelText="Disabled" disabled />
    <ExtendedFab {...args} labelText="Without Icon" />
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
