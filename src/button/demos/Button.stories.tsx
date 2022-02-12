import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../index";
import { ButtonPage } from "./ButtonPage";

const meta: ComponentMeta<typeof Button> = {
  title: "Components/Buttons/Common buttons",
  component: Button,
  parameters: {
    docs: {
      page: ButtonPage,
    },
  },
  argTypes: { onClick: { action: "clicked" } },
};

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <div style={{ display: "flex", gap: 27, margin: "12px 0" }}>
      <Button {...args} labelText="Enabled" />
      <Button {...args} disabled labelText="Disabled" />
    </div>
    <div style={{ display: "flex", gap: 15, margin: "12px 0" }}>
      <Button {...args} icon="add" labelText="Enabled" />
      <Button {...args} icon="add" disabled labelText="Disabled" />
    </div>
  </>
);

export const Elevated = Template.bind({});
Elevated.args = {
  variant: "elevated",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

export const Tonal = Template.bind({});
Tonal.args = {
  variant: "tonal",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export default meta;
