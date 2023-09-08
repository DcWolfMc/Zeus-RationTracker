import React, { FunctionComponent, useState } from "react";
import { View, Image, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import {
  Container,

} from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { IconButton } from "../../components/IconButton";
import { InfoBox } from "../../components/InfoBox";
import Carousel from "react-native-snap-carousel";
import { PurchaseListItem } from "../../components/PurchaseListItem";
import { useNavigation } from '@react-navigation/native';
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
}

export const PurchaseDetailsScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Container>
    </Container>
  );
};
