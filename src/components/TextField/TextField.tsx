import React, {forwardRef, useRef} from 'react';
import {
  FormControl,
  TextField,
  styled,
  useTheme, FormLabel
} from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { baseFont } from '../../config';

const StyledTextField = styled(TextField)(({theme}) => ({
  '&': {
    '& .MuiInputBase-root': {
      padding: '20px !important',
    },
    '& label': {
      color: '#FFFFFF !important',
      transform: 'initial',
      position: 'relative',
      fontSize: 14,
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(1),
      display: 'block'
    },
    // '& .MuiOutlinedInput-root': {
    //   padding: 0,
    //   paddingRight: '16px !important'
    // },
    '& .MuiInputBase-input': {
      padding: 0,
    },
    '& .MuiOutlinedInput-input':{
      padding: 0,
    },
    '& .MuiAutocomplete-input': {
      padding: '0 !important'
    },
    '& .MuiOutlinedInput-root': {
      color: '#B3B3B3 !important',
      // padding: '20px !important',
      // padding: '0 !important',
      textAlign: 'start',

      borderRadius: '16px!important',
      background: 'linear-gradient(144deg, #32383E -69.07%, #17191C 122.22%)!important',
      // boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.50), -4px -2px 16px 0px rgba(195, 200, 205, 0.08)',
      position: 'relative',
      '&:before': {
        content: '""',
        borderRadius: '18px',
        position: 'absolute',
        inset: -3,
        border: '1px solid #C8D5E1',
        // width: '100%',
        // height: '100%',
        // borderImageSource: 'linear-gradient(137.55deg, #C8D5E1 -67.56%, rgba(0, 0, 0, 0) 187.36%)',
        boxShadow: '2px 2px 2px 0px #1A202666 inset, 0px 0px 4px 0px #2E445700 inset',
      },
      boxShadow: '2px 3px 10px 0px #070709 inset, -2px -2px 10px 0px #FFFFFF0D inset',
    },

    fontFamily: baseFont,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}));

export interface IProps<Value> extends TextFieldProps<Value> {
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  label?: string;
  size?: 'large' | 'medium' | 'small' | undefined;
  mode?: 'dark' | undefined
}

export const CustomTextField = forwardRef<HTMLDivElement, IProps<any>>((props, ref) => {
  const {error, label, disabled } = props;
  const theme = useTheme();
  return (
    <>
      <FormControl disabled={disabled} fullWidth sx={{
        '&:hover .MuiInputLabel-formControl': {
          color: '#fff'
        }
      }} error={error}>
        <StyledTextField {...props} disabled={disabled} />
      </FormControl>
    </>
  );
});

export default CustomTextField;


