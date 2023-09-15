import { FunctionComponent } from "react";
import { PurchaseData } from "../../@types/purchaseData";
import { SummaryCard, HeaderText, HeaderTextHighlight } from "./styles";
import { differenceInDays, format, sub } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MonthTotalValue } from "../MonthTotalValue";

interface InfoBoxProps {
  purchasesData: PurchaseData[];
  monthsToSub?: number;
  variant?: "green";
}
export const InfoBox: FunctionComponent<InfoBoxProps> = ({
  monthsToSub = 0,
  purchasesData = [],
  variant,
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
    (acc, item) => acc + item.ration_price * item.quantity,
    0
  );

  return (
    <SummaryCard variant={variant}>
      <header>
        <HeaderText>Total no mês:</HeaderText>
        <HeaderTextHighlight>{monthName()}</HeaderTextHighlight>
      </header>
      <footer>
        <MonthTotalValue monthTotal={monthTotal}/>
        {lastPurchaseDateOfMonth ? (
          <span>
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
          </span>
        ) : (
          <span>Sem compras esse mês</span>
        )}
      </footer>
    </SummaryCard>
  );
};
