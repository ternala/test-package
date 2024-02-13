import React from "react";
import { IconButton, styled} from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { MuiIconButtonOverlay } from "./styles";
import { baseFont } from '../../config';

export interface IProps extends IconButtonProps {
  variant?: 'primary' | 'elevated' | undefined,
  size?: 'large' | 'medium' | 'small' | 'xsmall' | undefined,
  mode?: 'dark' | undefined
}


const StyledIconButton = styled(IconButton)(({}) => ({
  '&.MuiIconButton': {
    '&-sizeLarge': {
      height: '55px',
      width: '55px'
    },
    '&-sizeMedium': {
      height: '36px',
      width: '36px',
    },
    '&-sizeSmall': {
      height: '40px',
      width: '40px'
    },
    '&-sizeXsmall': {
      height: '24px',
      width: '24px',
      // padding: '10px 25px',
      '& svg': {
        width: '18px',
        height: '18px',
        flexShrink: 0,
        isolation: 'isolate'
      },
    },
  },
  '&, &.MuiIconButton-primary': {
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
    '&-spanBlur': {
      filter: 'blur(2px)',
      position: 'absolute !important',
      inset: 0,
      background: 'linear-gradient(146deg, #31343A -6.95%, #26292E 91.44%)',
      boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.60), -4px -4px 16px 0px rgba(195, 200, 205, 0.06)',
      width: '100%',
      height: '100%',
      zIndex: '-1'
    },

    position: 'relative',
    // borderRadius: '100%',
    // overflow: 'hidden',
    // background: 'linear-gradient(146deg, #31343A -6.95%, #26292E 91.44%)',
    // boxShadow: '4px 4px 18px 0px rgba(0, 0, 0, 0.60), -4px -4px 16px 0px rgba(195, 200, 205, 0.06)',
    display: 'flex',
    height: '55px',
    // padding: '15px 40px',
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

    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(11, 70, 104, 0.31), -1px -1px 2px rgba(113, 202, 252, 0.90)',
    color: '#1F1F1F',

    /* Buttons/Large */
    fontFamily: baseFont,
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '130%', /* 23.4px */
    letterSpacing: '0.36px',
    zIndex: 1,

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
  },

  // Elevated
  '&.MuiIconButton-elevated': {
    // '&SizeLarge': {
    //   height: '55px',
    // },
    // '&SizeMedium': {
    //   height: '50px',
    // },
    // '&SizeSmall': {
    //   height: '40px',
    // },
    // '&SizeXsmall': {
    //   height: '36px',
    //   padding: '10px 25px',
    // },
    borderRadius: '10px',
    textAlign: 'center',

    background: '#E3EDF7',
    boxShadow: '4px 2px 16px 0px rgba(136, 165, 191, 0.48), -4px -2px 16px 0px #FFF',
    textShadow: '1px 1px 2px rgba(76, 92, 111, 0.31), -1px -1px 2px rgba(241, 241, 241, 0.90)',
    color: '#1C1E22',

    '&[mode="dark"]': {
      background: 'linear-gradient(95deg, #17191C -55.33%, #32383E 172.68%) !important',
      boxShadow: '6px 6px 28px 0px rgba(0, 0, 0, 0.30), -5px -6px 16px 0px rgba(195, 200, 205, 0.04)',
      textShadow: '1px 1px 2px rgba(29, 52, 79, 0.31), -1px -1px 2px rgba(91, 91, 106, 0.90)',
      color: '#FFFFFF',
    },

    /* Buttons/Medium */
    fontFamily: baseFont,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '130%', /* 20.8px */
    letterSpacing: '0.32px',

    '&:hover': {
      boxShadow: '6px 6px 28px 0px rgba(0, 0, 0, 0.50), -5px -6px 16px 0px rgba(195, 200, 205, 0.04)',
    },
    '&:active': {
      boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.30), -5px -6px 16px 0px rgba(195, 200, 205, 0.02)',
      color: '#00AEFF',
    },
    '&:disabled, &.Mui-disabled': {
      // opacity: 0.5
      '& svg': {
        '& path': {
          fill: '#878787 !important',
          stroke: '#878787 !important',
        }
      },
    },
  }
}));

const CustomIconButton = (props: IProps) => {

  return (
      <StyledIconButton {...props}>
          <MuiIconButtonOverlay/>
          {props.children}
        {/*<span className="MuiIconButton-primary-spanBlur"></span>*/}
      </StyledIconButton>
  )
};

export default CustomIconButton;
