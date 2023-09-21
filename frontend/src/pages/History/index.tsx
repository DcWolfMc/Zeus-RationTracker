import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import {
  HistoryContainer,
  PurchaseTable,
  TdPrice,
  TdDateWrapper,
  DetailsButton,
  SearchFormContainer,
  BackButton,
  TitleWrapper,
  HeaderHistoryWrapper,
} from "./styles";
import {
  FilterDataProps,
  FilterDataTemplate,
  PurchaseData,
} from "../../@types/purchaseData";
import { getPurchases } from "../../services/api";
import { format } from "date-fns";
import {
  ArrowLeft,
  Calendar,
  FunnelSimple,
  MagnifyingGlass,
} from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import * as Dialog from "@radix-ui/react-dialog";
import { PurchaseFilterModal } from "../../components/PurchaseFilterModal";
import { ptBR } from "date-fns/locale";

export const History: FunctionComponent = () => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [filteredPurchases, setFilteredPurchases] = useState<PurchaseData[]>(
    []
  );
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");
  const [filterData, setFilterData] =
    useState<FilterDataProps>(FilterDataTemplate);

  useEffect(() => {
    async function ApiCall() {
      await getPurchases().then((response) => {
        setPurchases(response.data);
      });
    }

    ApiCall();
  }, []);

  //Applying filters ↧
  useEffect(() => {
    if (purchases.length > 0) {
      console.log("chamado");
      let newPurchaseData: PurchaseData[] = purchases;
      console.log("initial state: ", newPurchaseData);

      filterData.years.length > 0 &&
        (newPurchaseData = newPurchaseData.filter((purchase) => {
          //console.log("filter1");

          let purchaseYear = new Date(purchase.date_of_purchase)
            .getFullYear()
            .toString();
          return filterData.years.includes(purchaseYear);
        }));
      console.log("after filter1: ", newPurchaseData);

      filterData.months.length > 0 &&
        (newPurchaseData = newPurchaseData.filter((purchase) => {
          //console.log("filter2");
          let purchaseMonth = format(
            new Date(purchase.date_of_purchase),
            "MMMM",
            { locale: ptBR }
          ).toLowerCase();
          console.log("purchaseMonth ", purchaseMonth);
          console.log(
            "includesMonth ",
            filterData.months.toString().toLowerCase().includes(purchaseMonth)
          );
          return filterData.months
            .toString()
            .toLowerCase()
            .includes(purchaseMonth);
        }));
      console.log("after filter2: ", newPurchaseData);

      filterData.filterText !== "" &&
        (newPurchaseData = newPurchaseData.filter((purchase) => {
          console.log("filterText", filterText);
          console.log("filter3");
          if (
            purchase.name.toLowerCase().includes(filterText.toLowerCase()) ||
            purchase.place_of_purchase
              .toLowerCase()
              .includes(filterText.toLowerCase())
          ) {
            return true;
          }
          return false;
        }));
      console.log("after filter3: ", newPurchaseData);

      setFilteredPurchases(newPurchaseData);
    }
  }, [filterData, purchases]);

  function handleYearsItens() {
    let yearsItens: string[] = [];
    purchases.forEach((purchase) => {
      let purchseYear = new Date(purchase.date_of_purchase)
        .getFullYear()
        .toString();
      !yearsItens.includes(purchseYear) &&
        yearsItens.push(purchseYear.toString());
    });
    return yearsItens;
  }
  function handleChangeFilters(newData: FilterDataProps) {
    setFilterData(newData);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let data: FilterDataProps = { ...filterData, filterText };
    handleChangeFilters(data);
  }
  return (
    <HistoryContainer>
      <TitleWrapper>
        <h1>Histórico</h1>
      </TitleWrapper>
      <HeaderHistoryWrapper>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft size={40} weight="bold" />
        </BackButton>
        <SearchFormContainer>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              type="text"
              placeholder="Busque por nome ou local de compra"
              variant="outlined"
              inputProps={{ maxlength: 50 }}
            />
            <button type="submit">
              <MagnifyingGlass size={20} />
              Buscar
            </button>
          </form>
          <TitleWrapper>
            <Dialog.Root open={filterModal} onOpenChange={setFilterModal}>
              <Dialog.Trigger asChild>
                <DetailsButton>
                  <FunnelSimple size={20} /> Filter
                  {filterData.years.length > 0 &&
                    ` - Anos: ${filterData.years.map((year) => year)}`}
                  {filterData.months.length > 0 &&
                    ` - Meses: ${filterData.months.map((month) =>
                      month.substring(0, 3)
                    )}`}
                </DetailsButton>
              </Dialog.Trigger>
              <PurchaseFilterModal
                openModal={filterModal}
                setOpenModal={setFilterModal}
                purchaseData={purchases}
                filterData={filterData}
                handleChangeFilters={handleChangeFilters}
                yearsItens={handleYearsItens()}
              />
            </Dialog.Root>
            {/* <DetailsButton>Sort by</DetailsButton> */}
          </TitleWrapper>
        </SearchFormContainer>
      </HeaderHistoryWrapper>
      <PurchaseTable>
        <tbody>
          {filteredPurchases.length ? (
            filteredPurchases.map((purchase) => {
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
                  <td>{purchase.place_of_purchase.length>20?purchase.place_of_purchase.substring(0,19):purchase.place_of_purchase!=="não definido"?purchase.place_of_purchase:""}</td>
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
