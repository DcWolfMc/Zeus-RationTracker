import { FunctionComponent, useEffect, useState } from "react";
import {
  PurchaseDetailsContainer,
  BottonText,
  ButtonWrapper,
  DetailsItemWrapper,
  DetailsTitle,
  DetailsWrapper,
  EditButton,
  FillButton,
  FillButtonText,
  PurchaseDetailsHeader,
  ItemDivider,
  ItemTitle,
  ItemValue,
  MiddleText,
  ModalContainer,
  ModalText,
  ModalView,
  OutlinedButton,
  OutlinedButtonText,
  TopText,
  TrashButton,
  HeaderTextWrapper,
  ItemValueBold,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { DeletePurchaseById, getPurchaseById } from "../../services/api";
import { ptBR } from "date-fns/locale";
import { PurchaseData, templatePurchaseData } from "../../@types/purchaseData";
import { captalizeText } from "../../utils/masks";
import { priceFormatter } from "../../utils/formatter";
import { NotePencil, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { Alert, CircularProgress, Modal, Snackbar } from "@mui/material";
import { SnackbarType } from "../../@types/snackbar";

export const PurchaseDetails: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState<PurchaseData>(templatePurchaseData);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [snackbar, setSnackbar] = useState<SnackbarType>({open:false,type:"success"})
  const [snackbarMessage, setSnackbarMessage] = useState<string>("")
  const dateText = format(
    new Date(purchaseData.date_of_purchase),
    "EEEE', dia 'dd' de 'MMMM' de ' yyyy",
    { locale: ptBR }
  );
  const totalValue = purchaseData.quantity * purchaseData.ration_price;
  useEffect(() => {
    async function CallApiData() {
      setLoading(true);
      if (id) {
        await getPurchaseById(id!).then((response) => {
          setPurchaseData(response.data);
          //console.log("getPurchaseById:", response.data);
          setLoading(false);
        });
      }
    }
    CallApiData();
  }, []);
  function handleShowSnackbar(
    message: string,
    type: "error" | "warning" | "info" | "success"
  ) {
    setSnackbarMessage(message);
    setSnackbar({ open: true, type: type });
  }
  function handleCloseSnackbar() {
    setSnackbar((prev)=>{
        return{...prev, open:false}
    })
    
  }
  function handleModal() {
    setModalVisible(true);
  }
  function hideModal() {
    setModalVisible(false);
  }
    async function handleDeletePurchase() {
      setLoading(true);
      if (!id) {
        return null;
      } else {
        DeletePurchaseById(id)
          .then(() => {
            handleShowSnackbar("Compra deletada!", "success");
            navigate("../");
          })
          .catch((error) => {
            handleShowSnackbar("Não foi possível deletar a compra","error");
            console.log("DeletePurchaseById: ", error.response.data);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  return (
    <PurchaseDetailsContainer>
      <PurchaseDetailsHeader>
        <HeaderTextWrapper>
          {loading ? (
            <CircularProgress color="warning" />
          ) : (
            <>
              <TopText>{captalizeText(purchaseData.name)}</TopText>
              <MiddleText>R$ {priceFormatter.format(totalValue)}</MiddleText>
              <BottonText>{captalizeText(dateText)}</BottonText>
            </>
          )}
        </HeaderTextWrapper>

        <ButtonWrapper>
          <EditButton
            children={<NotePencil size={24} color={defaultTheme.gray_200} />}
            onClick={() => {
              navigate("./edit");
            }}
            disabled={loading}
          />
          <TrashButton
            children={<Trash size={24} color={defaultTheme.gray_200} />}
            onClick={() => handleModal()}
            disabled={loading}
          />
        </ButtonWrapper>
      </PurchaseDetailsHeader>
      <DetailsWrapper>
        <DetailsTitle>Detalhes</DetailsTitle>
        {loading ? (
          <CircularProgress color="warning" />
        ) : (
          <>
            <DetailsItemWrapper>
              <ItemTitle>Local de Compra</ItemTitle>
              <ItemValue>{purchaseData.place_of_purchase}</ItemValue>
            </DetailsItemWrapper>
            <ItemDivider />
            <DetailsItemWrapper>
              <ItemTitle>Quantidade</ItemTitle>
              <ItemValueBold>{purchaseData.quantity}</ItemValueBold>
            </DetailsItemWrapper>
            <ItemDivider />
            <DetailsItemWrapper>
              <ItemTitle>Valor unitário</ItemTitle>
              <ItemValueBold>
                {priceFormatter.format(purchaseData.ration_price)}
              </ItemValueBold>
            </DetailsItemWrapper>
            <ItemDivider />
            <DetailsItemWrapper>
              <ItemTitle>Peso da ração</ItemTitle>
              <ItemValueBold>{purchaseData.ration_weight} Kg</ItemValueBold>
            </DetailsItemWrapper>
            <ItemDivider />
            <DetailsItemWrapper>
              <ItemTitle>Marca da ração</ItemTitle>
              <ItemValue>{purchaseData.ration_brand}</ItemValue>
            </DetailsItemWrapper>
            <ItemDivider />
            <DetailsItemWrapper>
              <ItemTitle>Observação</ItemTitle>
              <ItemValue>
                {purchaseData.observations && purchaseData.observations}
              </ItemValue>
            </DetailsItemWrapper>
          </>
        )}
      </DetailsWrapper>
      <ModalContainer open={modalVisible} onClose={hideModal} >

          <ModalView>
            <ModalText>Deletar Compra?</ModalText>
            <ButtonWrapper>
              <OutlinedButton onClick={() => hideModal()}>
                <OutlinedButtonText>Cancelar</OutlinedButtonText>
              </OutlinedButton>
              <FillButton onClick={() => handleDeletePurchase()} disabled={loading}>
                {loading ? (
                  <CircularProgress color="warning"/>
                ) : (
                  <FillButtonText>Deletar</FillButtonText>
                )}
              </FillButton>
            </ButtonWrapper>
          </ModalView>
      </ModalContainer>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={snackbar.type == "success"? ()=>{handleCloseSnackbar(); navigate("../");}:handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </PurchaseDetailsContainer>
  );
};
