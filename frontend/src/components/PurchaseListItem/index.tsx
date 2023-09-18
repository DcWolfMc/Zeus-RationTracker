import { FunctionComponent } from "react";
import {
  PurchaseListItemContainer,
  DateWrapper,
  TextWrapper,
  Title,
  Value,
  TitleWrapper,
  Quantity,
  LocalText,
  DateText,
} from "./styles";
import { PurchaseData } from "../../@types/purchaseData";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { priceFormatter } from "../../utils/formatter";
import { Calendar } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
interface Props {
  purchaseId?: string;
  purchaseData?: PurchaseData;
}
export const PurchaseListItem: FunctionComponent<Props> = ({
  purchaseData,
  purchaseId,
}) => {
  let date = format( purchaseData?
    new Date(
      purchaseData?.date_of_purchase
    ):new Date(),
    " dd/MM/yyyy",
    {
      locale: ptBR,
    }
  );
  const navigate = useNavigate();
  return (
    <PurchaseListItemContainer
      onClick={() => navigate(`/purchase/${purchaseId}`)}
    >
      <TitleWrapper>
        <Title>{purchaseData?.name ? purchaseData.name : "Title"}</Title>
        <Quantity>x{purchaseData?.quantity}</Quantity>
      </TitleWrapper>
      <Value>
        {priceFormatter.format(
          purchaseData ? purchaseData?.ration_price * purchaseData?.quantity : 0
        )}
      </Value>
      <TextWrapper>
        <LocalText>
          {purchaseData &&
          (
            purchaseData.place_of_purchase === "não definido"
              ? ""
              : purchaseData.place_of_purchase.length > 20
              ? purchaseData.place_of_purchase.substring(0, 23) + "..."
              : purchaseData.place_of_purchase)
          }
        </LocalText>
        <DateWrapper>
          <Calendar
            size={18}
            color={defaultTheme.gray_600}
          />
          <DateText>{date}</DateText>
        </DateWrapper>
      </TextWrapper>
    </PurchaseListItemContainer>
  );
};
