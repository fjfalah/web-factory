import { createGlobalStyle } from 'styled-components';

import { theme } from '../themes';

const GlobalStyles = createGlobalStyle`
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  html {
    position: absolute;
    width: 100%;
  }
  body {
    margin: 0;
    color: ${theme.color.black};
    background: ${theme.color.white};
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
