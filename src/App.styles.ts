import { createGlobalStyle } from 'styled-components';
import { colors } from './utils/colors';

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
    background: ${colors.secondary};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
