import React from "react";
import { ToggleButtonGroup, styled} from '@mui/material';
import { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup/ToggleButtonGroup';

export interface IProps extends ToggleButtonGroupProps {
  size?: 'large' | 'medium' | 'small' | 'xsmall' | undefined,
  mode?: 'dark' | undefined
}


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({}) => ({
  '&, &.MuiToggleButtonGroup': {
    // '&-sizeMedium': {
    //   height: '36px',
    //   minWidth: '36px',
    // },
    // '&-sizeSmall': {
    //   height: '40px',
    //   minWidth: '40px'
    // },
    background: 'linear-gradient(242deg, #2C333A -10.02%, #1C1E22 -4.3%) !important',
    borderRadius: '12px',
    boxShadow: '2px 3px 8px 0px #070709 inset, -2px -2px 5px 0px rgba(255, 255, 255, 0.06) inset',
    padding: '5px',

    '& &-grouped:not(:last-of-type)': {
      borderTopRightRadius: '9px !important',
      borderBottomRightRadius: '9px !important',
    }
  }
}));

const CustomToggleButtonGroup = (props: IProps) => {

  return (
      <StyledToggleButtonGroup {...props}>
        {props.children}
      </StyledToggleButtonGroup>
  )
};

export default CustomToggleButtonGroup;

