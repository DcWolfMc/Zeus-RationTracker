import * as React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { purchaseData } from "./@types/purchaseData";
import { OverviewScreen } from "./screens/overviewScreen";
import { PurchaseDetailsScreen } from "./screens/purchaseDetailsScreen";


/*Tipo da RAIZ de navegação */
export type RootStackParamList = {
  Overview: undefined;
  //Config: undefined
  //NewPurchase: undefined
  Purchases: NavigatorScreenParams<PurchaseStackParamList>
};

/*Tipo do Produto de navegação */

export type PurchaseStackParamList = {
  PurchaseDetails: { purchaseId: string; };
  PurchaseEdit: { purchaseId: string; purchaseData: purchaseData };
};

const Stack = createNativeStackNavigator<
  RootStackParamList & PurchaseStackParamList
>();

function PurchaseStack() {
  return(
    <Stack.Navigator initialRouteName='PurchaseDetails'  screenOptions={{ headerShown: false }}>

      <Stack.Screen name='PurchaseDetails' component={PurchaseDetailsScreen}/>
      {/* <Stack.Screen name='PurchaseEdit' component={}/> */}

    </Stack.Navigator>

  )
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Overview"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Overview" component={OverviewScreen} />
        {/* <Stack.Screen name="Config" component={ClientProfileScreen} /> */}
        {/* <Stack.Screen name="NewPurchase" component={LoggedOutScreen} /> */}
        <Stack.Screen name="Purchases" component={PurchaseStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
