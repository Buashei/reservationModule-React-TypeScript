import styled from 'styled-components';
import { StyledDotProps } from './Dot.types';

export const StyledDot = styled('div')<StyledDotProps>`
  const secondaryLightExtra = ${({ theme }) => theme.colors.white};
  width: 1vh;
  height: 1vh;
  border-radius: 4px;
  background: ${({ status }) =>
    status === 'success'
      ? ({ theme }) => theme.colors.main
      : status === 'wait'
      ? ({ theme }) => theme.colors.secondaryLightExtra
      : 'black'};
  margin: 0 5px 0 5px;
`;
