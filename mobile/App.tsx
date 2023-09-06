import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider} from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import {defaultTheme} from "./src/global/styles/theme";
import Routes from "./src/Routes";
import { RootSiblingParent } from 'react-native-root-siblings';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootSiblingParent>
        <StatusBar style="auto" />
        <Routes/>
      </RootSiblingParent>
    </ThemeProvider>
  );
}
