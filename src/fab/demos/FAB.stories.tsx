import * as React from 'react';
import { ComponentStoryFn, ComponentMeta } from '@storybook/react';
import FAB from '../FAB';
import { FABPage } from './FABPage';

const meta: ComponentMeta<typeof FAB> = {
  title: 'Components/Buttons/FAB',
  component: FAB,
  parameters: {
    docs: {
      page: FABPage,
    },
  },
};

const Template: ComponentStoryFn<typeof FAB> = args => (
  <div style={{ display: 'flex', gap: 48 }}>
    <FAB {...args} icon="edit" />
    <FAB {...args} icon="edit" disabled />
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