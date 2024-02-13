import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TextField from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const SimpleTextField = Template.bind({});
SimpleTextField.args = {
  label: 'Label',
  defaultValue: 'Name'
};

export const ErrorTextField = Template.bind({});
ErrorTextField.args = {
  label: 'Label',
  defaultValue: 'Name',
  error: true,
};


export const DisabledTextField = Template.bind({});
DisabledTextField.args = {
  label: 'Label',
  defaultValue: 'Name',
  disabled: true
};
