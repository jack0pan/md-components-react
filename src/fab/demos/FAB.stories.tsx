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
  variant: 'surface',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
};

export default meta;
