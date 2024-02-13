import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Autocomplete from "./Autocomplete";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
} as Meta<typeof Autocomplete>;

const Template: StoryFn<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

export const SimpleAutocomplete = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleAutocomplete.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
};