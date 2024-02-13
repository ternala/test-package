import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  styled,
  useTheme
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { SelectProps } from '@mui/material/Select/Select';

const StyledSelect = styled(Select)(({theme}) => ({
  '&': {
    borderRadius: '16px!important',
    background: 'linear-gradient(144deg, #32383E -69.07%, #17191C 122.22%)!important',
    boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.50), -4px -2px 16px 0px rgba(195, 200, 205, 0.08)',
    color: '#fff',

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
  },
  '& .MuiSelect-select': {
    borderRadius: 0,
    background: 'transparent',
    boxShadow: 'none',
    color: '#fff',
    '&[aria-expanded="true"] ~ svg': {
      transform: 'translateY(-50%) rotate(-180deg)!important'
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}));

export interface IProps<Value> extends SelectProps<Value> {
  label?: string;
  placeholder?: string;
  options: Value[];
  error?: boolean;
  errorMessage?: string;
}

export const CustomSelect = <Value, >(props: IProps<Value>) => {
  const {label, placeholder, options, error, errorMessage, disabled} = props;
  const theme = useTheme();
  const [age, setAge] = useState<Value | string | null>(null);
  const handleChange = (e: SelectChangeEvent<Value>) => {
    setAge(e?.target?.value);
  }
  return (
    <>
      {label ?
        <FormLabel
          sx={{color: disabled ? '#E0E0E3' : '#646464', fontSize: 12, ml: theme.spacing(2), mb: theme.spacing(1), display: 'block'}}>{label}</FormLabel> : ''}
      <FormControl disabled={disabled} fullWidth sx={{
        '&:hover .MuiInputLabel-formControl': {
          color: '#fff'
        }
      }} error={error}>
        {placeholder ? <InputLabel id={'demo-simple-select-label'} shrink={false} sx={{
          '&.MuiFormLabel-filled': {display: 'none'},
          ':hover': {
            color: '#fff'
          },
          '&.Mui-focused': {
            color: '#fff'
          },
          transition: '.3s',
          color: disabled ? '#646464!important' : '#CDCDCD'
        }}>{placeholder}</InputLabel> : ''}
        <StyledSelect
          disabled={disabled}
          labelId="demo-simple-select-label"
          value={age}
          onChange={handleChange}
          IconComponent={() => <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" style={{
            pointerEvents: 'none',
            right: 10,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: '0.3s'
          }}>
            <path d="M5 9.0625L12.1875 16.25L19.375 9.0625" stroke="#63676B" strokeWidth="1.66667"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: '16px',
                background: 'linear-gradient(129deg, #272A2E -70.01%, #17191C 110.81%)',
                boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.50), -4px -2px 16px 0px rgba(195, 200, 205, 0.08)',
                '& .MuiMenuItem-root': {
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 400,
                  '&:hover': {
                    background: '#26282C'
                  }
                }
              }
            }
          }}
        >
          {options.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
        </StyledSelect>
        {(error && errorMessage) ? <FormHelperText id="component-helper-text">
          {errorMessage}
        </FormHelperText> : ''}
      </FormControl>
    </>
  );
};


export default CustomSelect;
