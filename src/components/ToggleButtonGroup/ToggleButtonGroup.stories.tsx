import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomToggleButtonGroup from "./ToggleButtonGroup";
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg';
import CustomToggleButton from "./ToggleButtonGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ToggleButtonGroup",
  component: CustomToggleButtonGroup,
} as Meta<typeof CustomToggleButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CustomToggleButtonGroup> = (args) => <CustomToggleButtonGroup {...args} />;

export const SimplePrimaryMediumToggleButtonGroup = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimplePrimaryMediumToggleButtonGroup.args = {
  children: (
      <>
        <CustomToggleButton value={"O"} selected>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </CustomToggleButton>
        <CustomToggleButton value={"L"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </CustomToggleButton>
      </>
  ),
  size: "medium",
  selected: false
};

export const SelectedSimplePrimaryMediumToggleButtonGroup = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectedSimplePrimaryMediumToggleButtonGroup.args = {
  children: (
      <>
        <CustomToggleButton value={"O"} selected>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </CustomToggleButton>
        <CustomToggleButton value={"L"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </CustomToggleButton>
      </>
  ),
  size: "medium",
  selected: true
};


export const DisabledPrimaryMediumToggleButtonGroup = Template.bind({});
DisabledPrimaryMediumToggleButtonGroup.args = {
  children: (
      <>
        <CustomToggleButton value={"O"} selected>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </CustomToggleButton>
        <CustomToggleButton value={"L"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 12H12M12 12H17M12 12V7M12 12V17" stroke="#00AEFF" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </CustomToggleButton>
      </>
  ),
  size: "medium",
  disabled: true,
};
