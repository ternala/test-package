import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomButton from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: CustomButton,
} as Meta<typeof CustomButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CustomButton> = (args) => <CustomButton {...args} />;

// Primary Buttons
export const SimplePrimaryLargeButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimplePrimaryLargeButton.args = {
  children: "Button",
  size: "large"
};

export const SimplePrimaryMediumButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimplePrimaryMediumButton.args = {
  children: "Button",
  size: "medium"
};


export const DisabledPrimaryLargeButton = Template.bind({});
DisabledPrimaryLargeButton.args = {
  children: "Button",
  size: "large",
  disabled: true,
};


// Elevated Buttons
export const SimpleElevatedMediumButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleElevatedMediumButton.args = {
  variant: "elevated",
  children: "Button",
  size: "medium"
};

export const DisabledElevatedMediumButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisabledElevatedMediumButton.args = {
  variant: "elevated",
  children: "Button",
  size: "medium",
  disabled: true
};

export const SimpleElevatedSmallButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleElevatedSmallButton.args = {
  variant: "elevated",
  children: "Button",
  size: "small",
};

export const SimpleElevatedXSmallButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleElevatedXSmallButton.args = {
  variant: "elevated",
  children: "Button",
  size: "xsmall",
};

export const SimpleDarkElevatedXSmallButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleDarkElevatedXSmallButton.args = {
  variant: "elevated",
  children: "Button",
  size: "xsmall",
  mode: "dark"
};



