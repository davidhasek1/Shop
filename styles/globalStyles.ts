import { createGlobalStyle } from "styled-components";

/* type Scrollable = {
  modalOpened: boolean;
}; */

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #EEEEF2;
    
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
