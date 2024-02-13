import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomToggleButton from "./ToggleButton";
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ToggleButton",
  component: CustomToggleButton,
} as Meta<typeof CustomToggleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CustomToggleButton> = (args) => <CustomToggleButton {...args} />;

export const SimplePrimaryMediumToggleButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimplePrimaryMediumToggleButton.args = {
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "medium",
  selected: false
};

export const SelectedSimplePrimaryMediumToggleButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectedSimplePrimaryMediumToggleButton.args = {
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "medium",
  selected: true
};


export const DisabledPrimaryMediumToggleButton = Template.bind({});
DisabledPrimaryMediumToggleButton.args = {
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "medium",
  disabled: true,
};
