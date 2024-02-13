import {Autocomplete, styled, useTheme} from '@mui/material';
import React from 'react';
import { AutocompleteProps } from '@mui/material/Autocomplete/Autocomplete';
import { ChipTypeMap } from '@mui/material/Chip';
import TextField from "../TextField";
// import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg'
import ArrowDownIcon from '../../assets/icons/arrow-down.svg'

const StyledAutocomplete = styled(Autocomplete)(({theme}) => ({
    '&': {
        // padding: 0
    },
    '& .MuiAutocomplete-input': {
        padding: 0
    }
}));

export interface IProps<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent> {

}

export const CustomAutocomplete = <
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>(props: IProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
    const theme = useTheme();
  return (
    <StyledAutocomplete
      {...props}
      // onChange={(_, newValue) => setValue(newValue)}
      renderInput={(params) => (
        <TextField
            {...params}
            // InputProps={{
            //     endAdornment: (
            //         <React.Fragment>
            //             <img src={ArrowDownIcon} alt={'icon'} style={{userSelect: 'none'}}/>
            //             {/*<ArrowDownIcon />*/}
            //         </React.Fragment>
            //     )
            // }}
        />
      )}
    />
  );
};

export default CustomAutocomplete;
