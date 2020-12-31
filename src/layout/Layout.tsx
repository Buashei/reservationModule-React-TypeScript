import React from 'react';

import { StyledWrapper } from './Layout.style';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <StyledWrapper>{children}</StyledWrapper>
    </>
  );
};
