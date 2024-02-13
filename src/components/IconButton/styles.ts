import styled from '@emotion/styled';

export const MuiIconButtonOverlay = styled.span`
  filter: blur(2px);
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 100%;
  background: linear-gradient(146deg, #31343A -6.95%, #26292E 91.44%);
  box-shadow: 4px 4px 18px 0px rgba(0, 0, 0, 0.60), -4px -4px 16px 0px rgba(195, 200, 205, 0.06);
`;
