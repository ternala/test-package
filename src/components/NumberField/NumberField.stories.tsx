import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import NumberField from "./NumberField";

export default {
  title: "Components/NumberField",
  component: NumberField,
} as Meta<typeof NumberField>;

const Template: StoryFn<typeof NumberField> = (args) => <NumberField {...args} />;

export const SimpleNumberField = Template.bind({});
SimpleNumberField.args = {
  defaultValue: 1
};

export const ErrorNumberField = Template.bind({});
ErrorNumberField.args = {
  defaultValue: 1,
  error: true,
};


export const DisabledNumberField = Template.bind({});
DisabledNumberField.args = {
  defaultValue: 1,
  disabled: true
};
