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
  background: ${props => props.theme.gray_400};
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

/* Hide scrollbar for Chrome, Safari and Opera */

/* width */
::-webkit-scrollbar {
  
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${props=>props.theme.gray_500}; 

}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props=>props.theme.gray_700}; ; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props=>props.theme.gray_800}; 
  transition: background-color 200ms;
}
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
`;
