import { View } from "react-native";
import {
  InfoBoxContainer,
  BottonText,
  MiddleText,
  TopText,
  TopTextHighlight,
  MBTextWrapper,
  TopTextWrapper,
} from "./styles";
import React, { FunctionComponent } from "react";
import { PurchaseData } from "../../@types/purchaseData";
import { differenceInDays, format, formatISO, sub } from "date-fns";
import { formatNumber } from "react-native-currency-input";
import { ptBR } from "date-fns/locale";
import { MonthTotalValue } from "../MonthTotalValue";
interface Props {
  purchasesData: PurchaseData[];
  monthsToSub: number;
}
export const InfoBox: FunctionComponent<Props> = ({
  purchasesData,
  monthsToSub,
}) => {
  const actualDate = new Date();
  const InfoBoxDate = sub(actualDate, { months: monthsToSub });
  const monthName = () => {
    let month = format(InfoBoxDate, "MMMM", { locale: ptBR });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    return month;
  };
  function InfoBoxData() {
    return purchasesData.filter((item) => {
      let itemDate = new Date(item.date_of_purchase);
      return (
        itemDate.getFullYear() === InfoBoxDate.getFullYear() &&
        itemDate.getMonth() == InfoBoxDate.getMonth()
      );
    });
  }
  const thisMonthData: PurchaseData[] = InfoBoxData();
  //console.log("thisMonthData: ", thisMonthData);

  const lastPurchaseDateOfMonth =
    thisMonthData.length > 0 && new Date(thisMonthData[0].date_of_purchase);

  const monthTotal = thisMonthData.reduce(
    (acc, item) => acc + item.ration_price*item.quantity,
    0
  );

  return (
    <InfoBoxContainer>
      <TopTextWrapper>
        <TopText>Total no mês:</TopText>
        <TopTextHighlight>{monthName()}</TopTextHighlight>
      </TopTextWrapper>
      <MBTextWrapper>
      <MonthTotalValue monthTotal={monthTotal} />
        {/* <MiddleText>R$ {formatNumber(monthTotal, { precision: 2 })}</MiddleText> */}
        {lastPurchaseDateOfMonth ? (
          <BottonText>
            Última compra{" "}
            {monthsToSub === 0
              ? `há ${differenceInDays(
                  actualDate,
                  new Date(lastPurchaseDateOfMonth)
                )} dias`
              : `realizada em ${format(
                  lastPurchaseDateOfMonth,
                  "dd 'de' LLLL 'às' HH:mm",
                  {
                    locale: ptBR,
                  }
                )}`}
          </BottonText>
        ) : (
          <BottonText>Sem compras esse mês</BottonText>
        )}
      </MBTextWrapper>
    </InfoBoxContainer>
  );
};
