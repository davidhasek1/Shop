import { createGlobalStyle } from "styled-components";

type Scrollable = {
  modalOpened: boolean;
};

const GlobalStyles = createGlobalStyle<Scrollable>`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #EEEEF2;
    overflow: ${(props) => (props.modalOpened ? "hidden" : "")}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
