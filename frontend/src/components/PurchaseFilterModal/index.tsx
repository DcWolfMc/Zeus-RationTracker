import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { ClearButton, Content, InputsWrapper, Title } from "./styles";
import {
  FilterDataProps,
  FilterDataTemplate,
  PurchaseData,
} from "../../@types/purchaseData";
import { Modal } from "@mui/material";
import { MultipleSelect } from "../Select";
interface PurchaseFilterModal {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  purchaseData: PurchaseData[];
  handleChangeFilters(newData: FilterDataProps): void;
  filterData: FilterDataProps;
  yearsItens: string[];
}
export const PurchaseFilterModal: FunctionComponent<PurchaseFilterModal> = ({
  openModal,
  setOpenModal,
  purchaseData,
  handleChangeFilters,
  filterData,
  yearsItens,
}) => {
  const [years, setYears] = useState<string[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  //const [loading, setLoading] = useState<boolean>(false);
  const handleClose = () => setOpenModal(false);
  useEffect(() => {
    if (filterData) {
      setYears(filterData.years);
      setMonths(filterData.months);
    }
  }, [purchaseData, filterData]);

  function clearAllStates() {
    setYears([]);
    setMonths([]);
    handleChangeFilters(FilterDataTemplate);
    console.log("Data: ", filterData, "Years: ", years, "Months: ", months);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data: FilterDataProps = {
      ...filterData,
      months: months,
      years: years,
    };
    handleChangeFilters(data)
  }
  const monthSelect = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Desembro",
  ];
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Content>
        <Title>{"Filtros"}</Title>
        <form onSubmit={handleSubmit}>
          <MultipleSelect
            SelectData={yearsItens}
            setValue={setYears}
            value={years}
            type={"year"}
          />
          <MultipleSelect
            SelectData={monthSelect}
            setValue={setMonths}
            value={months}
            type={"month"}
          />
          <InputsWrapper>
            <ClearButton onClick={clearAllStates}>Limpar</ClearButton>
            <button type="submit">
              Filtrar
            </button>
          </InputsWrapper>
        </form>
      </Content>
    </Modal>
  );
};
