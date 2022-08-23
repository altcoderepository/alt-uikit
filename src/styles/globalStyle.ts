import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Roboto, Helvetica, Sans-Serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #3c3c3c;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;
