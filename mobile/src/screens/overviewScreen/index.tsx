import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import { Container, SimpleText } from "./styles";

interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
}

export const OverviewScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
  return (
    <Container>
      <View>
        <SimpleText textColor={"yellow"} >New Screen Overview</SimpleText>
      </View>
    </Container>
  );
};
