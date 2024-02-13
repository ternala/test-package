import React from "react";
import { ToggleButton, styled} from '@mui/material';
import { ToggleButtonProps } from '@mui/material/ToggleButton/ToggleButton';
import { baseFont } from '../../config';

export interface IProps extends ToggleButtonProps {
  size?: 'large' | 'medium' | 'small' | 'xsmall' | undefined,
  mode?: 'dark' | undefined,
  selected?: boolean
}


const StyledToggleButton = styled(ToggleButton)(({}) => ({
  '&.Mui-selected': {
    border: '1px solid #000000',
    background: 'linear-gradient(90deg, #51585F -38.44%, #070808 236.51%)',
    boxShadow: '-1px 2px 5px 0px rgba(0, 0, 0, 0.80)',
    backdropFilter: 'blur(14px)',
    color: 'var(--Primary-Fantasy, #00AEFF)',
    fontFamily: baseFont,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '0.7px',
  },
  '&.MuiToggleButton': {
    '&-sizeMedium': {
      minHeight: '36px',
      minWidth: '36px',
    },
    '&-sizeSmall': {
      minHeight: '40px',
      minWidth: '40px'
    },

    '&Group-grouped:not(:last-of-type)': {
      borderTopRightRadius: '9px !important',
      borderBottomRightRadius: '9px !important',
    },
    '&Group-grouped:not(:first-of-type)': {
      marginLeft: '0px',
      borderTopLeftRadius: '9px !important',
      borderBottomLeftRadius: '9px !important',
      borderLeft: 'none'
    },

    borderRadius: '9px',
    border: 'none !important',

    '&Group-groupedHorizontal': {
      border: 'none !important',
    }

  },
  '&, &.MuiToggleButton-primary': {
    // '&SizeLarge': {
    //   height: '55px',
    // },
    // '&SizeMedium': {
    //   height: '45px',
    // },
    // '&SizeSmall': {
    //   height: '40px',
    // },
    // '&SizeXsmall': {
    //   height: '36px',
    //   padding: '10px 25px',
    // },
    // '&SizeXsmall': {
    //   height: '36px',
    //   padding: '10px 25px',
    // },

    position: 'relative',
    // borderRadius: '100%',
    // overflow: 'hidden',
    // background: 'linear-gradient(146deg, #31343A -6.95%, #26292E 91.44%)',
    // boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.60), -4px -4px 16px 0px rgba(195, 200, 205, 0.06)',
    display: 'flex',
    height: '36px',
    minWidth: '36px',
    padding: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',

    '& svg': {
      width: '24px',
      height: '24px',
      flexShrink: 0,
      isolation: 'isolate',
      '& path': {
        fill: '#00AEFF',
        stroke: '#00AEFF'
      }
    },

    // textAlign: 'center',
    // textShadow: '1px 1px 2px rgba(11, 70, 104, 0.31), -1px -1px 2px rgba(113, 202, 252, 0.90)',
    // color: '#1F1F1F',

    borderRadius: '9px',

    /* Buttons/Large */
    color: 'var(--Primary-Fantasy, #B3B3B3)',
    fontFamily: baseFont,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '0.7px',

    '&:hover': {
      // background: 'var(--Primary_gradient-Fantasy_gradient, linear-gradient(92deg, #00AEFF -13.2%, #8EDBFF 145.97%))',
      // boxShadow: '6px 9px 40px 0px rgba(11, 70, 104, 0.65), -6px -6px 16px 0px rgba(255, 255, 255, 0.15)',

      // '& ~ .MuiIconButton-spanBlur': {
      //   filter: 'blur(1px)',
      //   position: 'absolute',
      //   insert: 0,
      //   background: 'linear-gradient(327deg, #31343A -77.68%, #26292E 87.35%)',
      //   boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.44), -4px -2px 16px 0px rgba(195, 200, 205, 0.07)',
      //   width: '100%',
      //   height: '100%',
      //   zIndex: '-1'
      // }
    },
    '&:active': {
      background: 'var(--Primary_gradient-Fantasy_gradient, linear-gradient(92deg, #00AEFF -13.2%, #8EDBFF 145.97%))',
      boxShadow: '1px 1px 5px 0px rgba(55, 138, 78, 0.30), -5px -6px 16px 0px rgba(255, 255, 255, 0.02)'
    },
    '&:disabled, &.Mui-disabled': {
      // opacity: 0.5
      '& svg': {
        '& path': {
          fill: '#878787',
          stroke: '#878787',
        }
      },
    },
  }
}));

const CustomToggleButton = (props: IProps) => {

  return (
      <StyledToggleButton {...props}>
        {props.children}
      </StyledToggleButton>
  )
};

export default CustomToggleButton;
