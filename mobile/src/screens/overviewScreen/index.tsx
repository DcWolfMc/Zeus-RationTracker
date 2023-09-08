import React, { FunctionComponent, useState } from "react";
import { View, Image, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import {
  Container,
  Header,
  SimpleText,
  Logo,
  HeaderButtonWrapper,
  NewPurchaseButton,
  NewPurchaseText,
  Icon,
  InfoBoxScroller,
  PurchasesList,
  InfoBoxScroller2,
} from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { IconButton } from "../../components/IconButton";
import { InfoBox } from "../../components/InfoBox";
import Carousel from "react-native-snap-carousel";
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
}

export const OverviewScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <Container>
      <Header>
        <Logo source={require("../../../assets/logo.png")} />
        <HeaderButtonWrapper>
          <NewPurchaseButton>
            <NewPurchaseText textColor={"yellow"}>Nova Compra</NewPurchaseText>
            <Icon name="plus" size={20} color={defaultTheme.colors.gray_300} />
          </NewPurchaseButton>
          {/* <IconButton icon={"settings"} iconColor={defaultTheme.colors.yellow_300} iconSize={40}/> */}
        </HeaderButtonWrapper>
      </Header>
      <View>
        {/* <InfoBoxScroller2
          data={[1, 2, 3]}
          layout={"default"}
          renderItem={(item) => <InfoBox />}
          sliderWidth={windowWidth}
          itemWidth={268}
        /> */}
        <InfoBoxScroller>
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </InfoBoxScroller>
        <PurchasesList></PurchasesList>
      </View>
    </Container>
  );
};
