import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  label: "Team:",
  placeholder: "Select team"
};

export const ErrorSelect = Template.bind({});
ErrorSelect.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  label: "Team:",
  placeholder: "Select team",
  error: true,
  errorMessage: 'Something went wrong'
};


export const DisabledSelect = Template.bind({});
DisabledSelect.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  label: "Team:",
  placeholder: "Select team",
  disabled: true
};
