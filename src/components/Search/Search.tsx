import React, { useState } from 'react';
import {
  useTheme
} from '@mui/material';
import Autocomplete from "../Autocomplete";
import {AutocompleteProps} from "@mui/material/Autocomplete/Autocomplete";
// import TextField from "../TextField/TextField";
// import SearchIcon from "../../assets/icons/search.svg";

export interface IProps<Value> extends AutocompleteProps<Value> {}

export const CustomSearch = <Value, >(props: IProps<Value>) => {
  const theme = useTheme();

  return (
    <>
      <Autocomplete {...props}/>
    </>
  );
};


export default CustomSearch;
