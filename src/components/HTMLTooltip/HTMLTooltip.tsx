import React from 'react';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import styled from '@emotion/styled';

const HtmlTooltip = styled(({className, ...props}: TooltipProps) => <Tooltip {...props} classes={{popper: className}}/>)(
  ({theme}: { theme: any }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9'
    }
  })
);

export default HtmlTooltip;
