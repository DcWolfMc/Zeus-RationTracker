import React, { FunctionComponent } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Link } from '@react-navigation/native';
import {
  PurchaseListItemContainer,
  BottonText,
  DateWrapper,
  TextWrapper,
  Title,
  Value,
  Icon,
} from "./styles";
import { purchaseData } from "../../@types/purchaseData";
import { RootStackParamList } from "../../Routes";
interface Props{
    purchaseId?: string;
    purchaseData?: purchaseData;
    navigation: NativeStackNavigationProp<
    RootStackParamList,
    "Overview"|"Purchases"
  >;
}
export const PurchaseListItem: FunctionComponent<Props> = ({navigation,purchaseData,purchaseId}) => {

return (
    <PurchaseListItemContainer onPress={()=> navigation.navigate("Purchases",{screen:"PurchaseDetails"})}>
      <Title> DogChow - 10kgs </Title>
      <Value>R$ 50,99</Value>
      <TextWrapper>
        <BottonText>São Luiz - Rio Mar</BottonText>
        <DateWrapper>
          <Icon name="calendar" />
          <BottonText> 20/052023</BottonText>
        </DateWrapper>
      </TextWrapper>
    </PurchaseListItemContainer>
  );
};
