import React, { FunctionComponent, useState } from "react";
import { Dimensions,} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PurchaseStackParamList, RootStackParamList } from "../../Routes";
import {
  Container,
  BottonText,
  Header,
  MiddleText,
  TopText,
  ButtonWrapper,
  EditButton,
  TrashButton,
  DetailsWrapper,
  DetailsTitle,
  DetailsItemWrapper,
  ItemValue,
  ItemTitle,
  ItemDivider,
  ContainerScroller,
} from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { purchaseData } from "../../@types/purchaseData";
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<
    PurchaseStackParamList,
    "PurchaseDetails"
  >;
}

export const PurchaseDetailsScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Container>
      <ContainerScroller
        
      >
        <Header>
          <TopText>DogChow - 10kgs</TopText>
          <MiddleText>R$ 50,99</MiddleText>
          <BottonText>Sabado, dia 20 de maio de 2023</BottonText>
        </Header>
        <ButtonWrapper>
          <EditButton
            icon={"edit"}
            iconColor={defaultTheme.colors.gray_300}
            onPress={() => {
              navigation.navigate("PurchaseEdit", {
                purchaseData: purchaseData,
                purchaseId: "",
              });
            }}
          />
          <TrashButton
            icon={"trash"}
            iconColor={defaultTheme.colors.gray_300}
          />
        </ButtonWrapper>
        <DetailsWrapper>
          <DetailsTitle>Destalhes</DetailsTitle>
          <DetailsItemWrapper>
            <ItemTitle>Local de Compra</ItemTitle>
            <ItemValue>São Luiz - Rio Mar</ItemValue>
          </DetailsItemWrapper>
          <ItemDivider />
          <DetailsItemWrapper>
            <ItemTitle>Peso da ração</ItemTitle>
            <ItemValue>10 Kg</ItemValue>
          </DetailsItemWrapper>
          <ItemDivider />
          <DetailsItemWrapper>
            <ItemTitle>Marca da ração</ItemTitle>
            <ItemValue>DogChow</ItemValue>
          </DetailsItemWrapper>
          <ItemDivider />
          <DetailsItemWrapper>
            <ItemTitle>Observação</ItemTitle>
            <ItemValue>
              Muiyo texto Muiyo textoeMuiyo texto Muiyo texto Muiyo texto Muiyo
              textoeMuiyo texto Muiyo texto Muiyo texto Muiyo textoeMuiyo texto
              Muiyo texto Muiyo texto Muiyo textoeMuiyo texto Muiyo texto Muiyo
              texto Muiyo textoeMuiyo texto Muiyo texto Muiyo texto Muiyo
              textoeMuiyo texto Muiyo texto
            </ItemValue>
          </DetailsItemWrapper>
        </DetailsWrapper>
      </ContainerScroller>
    </Container>
  );
};
