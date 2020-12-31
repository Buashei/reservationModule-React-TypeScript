import React from 'react';
import { ButtonComponentProps } from './Button.types';
import { StyledButton } from './Button.styles';

export const Button: React.FC<ButtonComponentProps> = ({ onClick, children, ...otherProps }) => {
  return (
    <StyledButton onClick={onClick} {...otherProps}>
      {children}
    </StyledButton>
  );
};
