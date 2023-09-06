import React, { FunctionComponent, useState } from "react";
import { View, Image} from "react-native";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import { Container, Header, SimpleText, Logo,HeaderButtonWrapper,NewPurchaseButton,NewPurchaseText, Icon, InfoBoxScroller } from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { IconButton } from "../../components/IconButton";
import { InfoBox } from "../../components/InfoBox";
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
}

export const OverviewScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
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
      <InfoBoxScroller horizontal showsHorizontalScrollIndicator pagingEnabled>
        <InfoBox/>
        <InfoBox/>
        <InfoBox/>
        <InfoBox/>

      </InfoBoxScroller>
        <SimpleText  textColor={"green"}>New Screen Overview</SimpleText>
      </View>
    </Container>
  );
};
