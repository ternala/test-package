import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Search from "./Search";
import TextField from "../TextField/TextField";
import SearchIcon from "../../assets/icons/search.svg";

export default {
  title: "Components/Search",
  component: Search,
} as Meta<typeof Search>;

const Template: StoryFn<typeof Search> = (args) => <Search {...args} />;

export const SimpleSearch = Template.bind({});
SimpleSearch.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  // renderInput: () => (
  //     <TextField
  //         label="Movie"
  //         InputProps={{
  //           endAdornment: (
  //               <React.Fragment>
  //                 <img src={SearchIcon} alt={'icon'} style={{userSelect: 'none'}}/>
  //               </React.Fragment>
  //           ),
  //         }}
  //     />
  // )
};

export const ErrorSearch = Template.bind({});
ErrorSearch.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  label: "Team:",
  placeholder: "Select team",
  error: true,
  errorMessage: 'Something went wrong',
  // renderInput: () => (
  //     <TextField
  //         label="Movie"
  //         InputProps={{
  //           endAdornment: (
  //               <React.Fragment>
  //                 <img src={SearchIcon} alt={'icon'} style={{userSelect: 'none'}}/>
  //               </React.Fragment>
  //           ),
  //         }}
  //     />
  // )
};


export const DisabledSearch = Template.bind({});
DisabledSearch.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
  disabled: true,
  // renderInput: () => (
  //   <TextField
  //       label="Movie"
  //       InputProps={{
  //         endAdornment: (
  //             <React.Fragment>
  //               <img src={SearchIcon} alt={'icon'} style={{userSelect: 'none'}}/>
  //             </React.Fragment>
  //         ),
  //       }}
  //   />
  // )
};
