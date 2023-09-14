import * as React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PurchaseData } from "./@types/purchaseData";
import { OverviewScreen } from "./screens/OverviewScreen";
import { PurchaseDetailsScreen } from "./screens/PurchaseDetailsScreen";
import { defaultTheme } from "./global/styles/theme";
import { getContrast } from "polished";
import { PurchaseEditScreen } from "./screens/PurchaseEditScreen";
import { Platform, PlatformOSType } from "react-native";

/*Tipo da RAIZ de navegação */
export type RootStackParamList = {
  Overview: undefined;
  //Config: undefined
  //NewPurchase: undefined
  Purchases: NavigatorScreenParams<PurchaseStackParamList>;
};

/*Tipo do Produto de navegação */

export type PurchaseStackParamList = {
  PurchaseDetails: { purchaseId: string };
  PurchaseEdit: { purchaseId: string; purchaseData: PurchaseData };
};

const Stack = createNativeStackNavigator<
  RootStackParamList & PurchaseStackParamList
>();

function PurchaseStack() {
  return (
    <Stack.Navigator
      initialRouteName="PurchaseDetails"
      screenOptions={
        Platform.OS === "ios"
          ? {
              headerShown: false,
              headerShadowVisible: false,
              headerBackVisible: true,
              headerBackTitleVisible: false,
              headerTitle:"",
              headerStyle: { backgroundColor: defaultTheme.colors.gray_300 },
            }
          : {
              statusBarStyle:
                getContrast(defaultTheme.colors.gray_200, "#FFF") < 3.5
                  ? "dark"
                  : "light",
              headerShown: true,
              headerShadowVisible: false,
              title: "",
              headerStyle: { backgroundColor: defaultTheme.colors.gray_300 },
            }
      }
    >
      <Stack.Screen name="PurchaseDetails" component={PurchaseDetailsScreen}/>
      <Stack.Screen name="PurchaseEdit" component={PurchaseEditScreen} options={Platform.OS=="ios"&&{headerShown:true}}/>
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Overview"
        screenOptions={
          Platform.OS === "ios"
            ? {
                headerShown: false,
              }
            : {
                headerShown: false,
                statusBarStyle:
                  getContrast(defaultTheme.colors.gray_200, "#FFF") < 3.5
                    ? "dark"
                    : "light",
              }
        }
      >
        <Stack.Screen name="Overview" component={OverviewScreen} />
        {/* <Stack.Screen name="Config" component={} /> */}
        {/* <Stack.Screen name="NewPurchase" component={} /> */}
        <Stack.Screen name="Purchases" component={PurchaseStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
