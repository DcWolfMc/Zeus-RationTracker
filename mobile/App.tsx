import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {PlatformOSType} from "react-native"
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { defaultTheme } from "./src/global/styles/theme";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Routes from "./src/Routes";
import { RootSiblingParent } from "react-native-root-siblings";
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
        }).then(()=>Font.useFonts({
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
        }));
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        //await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn("App warn: ", e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <RootSiblingParent>
        <StatusBar translucent style="auto" />
        <Routes />
      </RootSiblingParent>
    </ThemeProvider>
  );
}

// Keep the splash screen visible while we fetch resources

// export default function App() {
//   SplashScreen.preventAutoHideAsync();
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.useFonts({
//           Roboto_400Regular,
//           Roboto_500Medium,
//           Roboto_700Bold,
//         })
//         await Font.loadAsync(Entypo.font);
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. Please remove this if you copy and paste the code!
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View
//       style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//       onLayout={onLayoutRootView}>
//       <Text>SplashScreen Demo! 👋</Text>
//       <Entypo name="rocket" size={30} />
//     </View>
//   );
// }
