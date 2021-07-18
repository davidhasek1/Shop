import { createGlobalStyle } from 'styled-components'
import { defaultButton } from './Button'
/* type Scrollable = {
  modalOpened: boolean;
}; */

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #EEEEF2;
    font-size: 16px;
    
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  ${defaultButton}
`

export default GlobalStyles
