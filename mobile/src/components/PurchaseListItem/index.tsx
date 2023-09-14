import React, { FunctionComponent } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Link } from "@react-navigation/native";
import {
  PurchaseListItemContainer,
  DateWrapper,
  TextWrapper,
  Title,
  Value,
  Icon,
  TitleWrapper,
  Quantity,
  LocalText,
  DateText,
} from "./styles";
import { PurchaseData } from "../../@types/purchaseData";
import { RootStackParamList } from "../../Routes";
import { formatNumber } from "react-native-currency-input";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { defaultTheme } from "../../global/styles/theme";
interface Props {
  purchaseId?: string;
  purchaseData?: PurchaseData;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "Overview" | "Purchases"
  >;
}
export const PurchaseListItem: FunctionComponent<Props> = ({
  navigation,
  purchaseData,
  purchaseId,
}) => {
  let date = format(new Date(purchaseData.date_of_purchase), " dd/MM/yyyy", {
    locale: ptBR,
  });
  return (
    <PurchaseListItemContainer
      onPress={() =>
        navigation.navigate("Purchases", {
          screen: "PurchaseDetails",
          params: { purchaseId: purchaseId },
        })
      }
    >
      <TitleWrapper>
        <Title>{purchaseData.name}</Title>
        <Quantity>x{purchaseData.quantity}</Quantity>
      </TitleWrapper>
      <Value>
        R${" "}
        {formatNumber(purchaseData.ration_price * purchaseData.quantity, {
          precision: 2,
        })}
      </Value>
      <TextWrapper>
        <LocalText>
          {purchaseData.place_of_purchase === "não definido"
            ? ""
            : purchaseData.place_of_purchase.length > 20
            ? purchaseData.place_of_purchase.substring(0, 23) + "..."
            : purchaseData.place_of_purchase}
        </LocalText>
        <DateWrapper>
          <Icon
            name="calendar"
            size={18}
            color={defaultTheme.colors.gray_600}
          />
          <DateText>{date}</DateText>
        </DateWrapper>
      </TextWrapper>
    </PurchaseListItemContainer>
  );
};
