import React from 'react';
import {
  FormControl,
  TextField,
  styled,
  useTheme
} from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import Button from "../Button";
import { baseFont } from '../../config';

const StyledTextField = styled(TextField)(({theme}) => ({
  '&': {
    borderRadius: '16px!important',
    background: 'linear-gradient(144deg, #32383E -69.07%, #17191C 122.22%)!important',
    boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.50), -4px -2px 16px 0px rgba(195, 200, 205, 0.08)',
    color: '#B3B3B3 !important',

    '& .MuiInputBase-input': {
      color: '#B3B3B3 !important',
      padding: '12px !important',
      textAlign: 'end',
    },

    fontFamily: baseFont,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '0.28px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}));

export interface IProps<Value> extends TextFieldProps<Value> {
  placeholder?: string;
  defaultValue?: number;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  counter?: boolean;
}

export const CustomNumberField = <Value, >(props: IProps<Value>) => {
  const {error, disabled, counter, defaultValue} = props;
  const theme = useTheme();
  return (
    <>
      <FormControl disabled={disabled} fullWidth sx={{
        '&:hover .MuiInputLabel-formControl': {
          color: '#fff'
        }
      }} error={error}>
        {counter && (
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M9 18L15 13L21 18" stroke="#00AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        )}
        <StyledTextField disabled={disabled} type={"number"} defaultValue={defaultValue}/>
        {counter && (
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M7.97656 12L13.9766 17L19.9766 12" stroke="#878787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        )}
      </FormControl>
    </>
  );
};


export default CustomNumberField;


