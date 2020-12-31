import styled from 'styled-components';
import { ButtonComponentProps } from './Button.types';

export const StyledButton = styled.button<ButtonComponentProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1.5px 2px rgba(0, 0, 0, 0.1);
  font-family: Ubuntu;
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: 18px;
  text-transform: uppercase;
`;
