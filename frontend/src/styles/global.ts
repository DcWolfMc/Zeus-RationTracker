import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

:focus {
  outline: transparent;
  //box-shadow: 0 0 0 2px ${props => props.theme.green_500};
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: ${props => props.theme.gray_300};
  color: ${props => props.theme.gray_700};
  -webkit-font-smoothing: antialiased;
}
body,
span,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
  //font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 1rem;
}

`;
