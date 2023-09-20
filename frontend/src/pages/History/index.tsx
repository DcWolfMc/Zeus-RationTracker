import { FunctionComponent, useEffect, useState } from "react";
import {
  HistoryContainer,
  PurchaseTable,
  TdPrice,
  TdDateWrapper,
  DetailsButton,
  SearchFormContainer,
  BackButton,
  TitleWrapper,
} from "./styles";
import { PurchaseData } from "../../@types/purchaseData";
import { getPurchases } from "../../services/api";
import { SearchForm } from "../../components/SearchForm";
import { format } from "date-fns";
import { ArrowLeft, Calendar, MagnifyingGlass } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export const History: FunctionComponent = () => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);

  useEffect(() => {
    async function ApiCall() {
      await getPurchases().then((response) => {
        setPurchases(response.data);
      });
    }
    ApiCall();
  }, []);
  return (
    <HistoryContainer>
        <TitleWrapper>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={40} weight="bold" />
          </BackButton>
          <h1>Histórico</h1>
        </TitleWrapper>
      <SearchFormContainer>
        <form action="">
          <TextField fullWidth  />
          <button type="submit">
            <MagnifyingGlass size={20}/>
            Buscar
          </button>
        </form>
        <TitleWrapper>

        <DetailsButton>Filter</DetailsButton>
        <DetailsButton>Group by</DetailsButton>
        </TitleWrapper>
      </SearchFormContainer>
      <PurchaseTable>
        <tbody>
          {purchases.length ? (
            purchases.map((purchase) => {
              return (
                <tr key={purchase._id}>
                  <td width={"30%"}>{purchase.name}</td>
                  <TdPrice>
                    {priceFormatter.format(purchase.ration_price)}
                  </TdPrice>
                  <td>
                    <TdDateWrapper>
                      <Calendar />
                      {format(
                        new Date(purchase.date_of_purchase),
                        "dd/MM/yyyy"
                      )}
                    </TdDateWrapper>
                  </td>
                  <td width={"10%"}>
                    <DetailsButton
                      onClick={() => navigate(`/purchase/${purchase._id}`)}
                    >
                      Ver
                    </DetailsButton>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td width={"100%"} align="center">
                Nenhuma compra encontrada
              </td>
            </tr>
          )}
        </tbody>
      </PurchaseTable>
    </HistoryContainer>
  );
};
