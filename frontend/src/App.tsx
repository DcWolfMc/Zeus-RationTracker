import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <ThemeProvider theme={defaultTheme} >

    <Router/>
    <GlobalStyle />
    <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
