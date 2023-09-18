import { FunctionComponent } from "react";
import { PurchaseData } from "../../@types/purchaseData";
import { SummaryCard, HeaderText, HeaderTextHighlight } from "./styles";
import { differenceInDays, format, sub } from "date-fns";
import { ptBR } from "date-fns/locale";
import { InfoBoxTotalValue } from "../InfoBoxTotalValue";

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
  const actualYear = actualDate.getFullYear()
  const InfoBoxDate = sub(actualDate, { months: monthsToSub });

  const monthName = () => {
    let month = format(InfoBoxDate, "MMMM", { locale: ptBR });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    return month;
  };
  function InfoBoxData() {
    if(variant === "green"){
      
      return purchasesData.filter((item)=>{
        let itemDate = new Date(item.date_of_purchase);
        return(
          itemDate.getFullYear() === InfoBoxDate.getFullYear()
        )
      })
    }else{

      return purchasesData.filter((item) => {
        let itemDate = new Date(item.date_of_purchase);
        return (
          itemDate.getFullYear() === InfoBoxDate.getFullYear() &&
          itemDate.getMonth() == InfoBoxDate.getMonth()
          );
        });
      }
  }
  const thisBoxData: PurchaseData[] = InfoBoxData();

  const lastPurchaseDate =
    thisBoxData.length > 0 && new Date(thisBoxData[0].date_of_purchase);

  const totalValue = thisBoxData.reduce(
    (acc, item) => acc + item.ration_price * item.quantity,
    0
  );
  

  return (
    <SummaryCard variant={variant}>
      <header>
        <HeaderText>Total no mês:</HeaderText>
        <HeaderTextHighlight variant={variant} >{variant?actualYear:monthName()}</HeaderTextHighlight>
      </header>
      <footer>
        <InfoBoxTotalValue variant={variant} totalValue={totalValue}/>
        {lastPurchaseDate ? (
          <span>
            Última compra{" "}
            {monthsToSub === 0
              ? `há ${differenceInDays(
                  actualDate,
                  new Date(lastPurchaseDate)
                )} dias`
              : `realizada em ${format(
                lastPurchaseDate,
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
