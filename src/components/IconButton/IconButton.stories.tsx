import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomIconButton from "./IconButton";
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/IconButton",
  component: CustomIconButton,
} as Meta<typeof CustomIconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CustomIconButton> = (args) => <CustomIconButton {...args} />;

// Primary Buttons
export const SimplePrimaryLargeIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimplePrimaryLargeIconButton.args = {
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "large"
};

export const SimplePrimaryMediumIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimplePrimaryMediumIconButton.args = {
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "medium"
};


export const DisabledPrimaryLargeIconButton = Template.bind({});
DisabledPrimaryLargeIconButton.args = {
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "large",
  disabled: true,
};


// Elevated Buttons
export const SimpleElevatedMediumIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleElevatedMediumIconButton.args = {
  variant: "elevated",
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "medium"
};

export const DisabledElevatedMediumIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DisabledElevatedMediumIconButton.args = {
  variant: "elevated",
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "medium",
  disabled: true
};

export const SimpleElevatedSmallIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleElevatedSmallIconButton.args = {
  variant: "elevated",
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "small",
};

export const SimpleElevatedXSmallIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleElevatedXSmallIconButton.args = {
  variant: "elevated",
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "xsmall",
};

export const SimpleDarkElevatedXSmallIconButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleDarkElevatedXSmallIconButton.args = {
  variant: "elevated",
  children: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  size: "xsmall",
  mode: "dark"
};



