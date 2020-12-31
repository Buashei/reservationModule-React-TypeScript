import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu';
    color: white;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
