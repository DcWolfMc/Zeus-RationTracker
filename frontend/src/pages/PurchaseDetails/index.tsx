import { FunctionComponent, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
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
  BackButton,
  RowWrapper,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { DeletePurchaseById, getPurchaseById } from "../../services/api";
import { ptBR } from "date-fns/locale";
import { PurchaseData, templatePurchaseData } from "../../@types/purchaseData";
import { captalizeText } from "../../utils/masks";
import { priceFormatter } from "../../utils/formatter";
import { ArrowLeft, NotePencil, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { PurchaseFormModal } from "../../components/PurchaseFormModal";

export const PurchaseDetails: FunctionComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState<PurchaseData>(templatePurchaseData);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModal, setEditModal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true);
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
          console.log("getPurchaseById:", response.data);
          setLoading(false);
        });
      }
    }
    CallApiData();
  }, []);
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
          toast.success("Compra deletada!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          navigate("../");
        })
        .catch((error) => {
          toast.error("Não foi possível deletar a compra", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
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
        <RowWrapper>
            <BackButton onClick={()=>navigate(-1)}>
                <ArrowLeft size={40}/>
            </BackButton>
          {loading ? (
            <CircularProgress color="warning" />
          ) : (
            <HeaderTextWrapper>
              <TopText>{captalizeText(purchaseData.name)}</TopText>
              <MiddleText>R$ {priceFormatter.format(totalValue)}</MiddleText>
              <BottonText>{captalizeText(dateText)}</BottonText>
            </HeaderTextWrapper>
          )}
        </RowWrapper>

        <ButtonWrapper>
          
          <Dialog.Root open={editModal} onOpenChange={setEditModal}>
          <Dialog.Trigger asChild>
          <EditButton
            children={<NotePencil size={24} color={defaultTheme.gray_200} />}
            disabled={loading}
          />
          </Dialog.Trigger>
            <PurchaseFormModal setOpenModal={setEditModal} purchaseData={purchaseData} type="edit"/>
        </Dialog.Root>
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
              <ItemValue>
                {purchaseData.place_of_purchase
                  ? purchaseData.place_of_purchase
                  : "-"}
              </ItemValue>
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
              <ItemValue>
                {purchaseData.ration_brand ? purchaseData.ration_brand : "-"}
              </ItemValue>
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
      <ModalContainer open={modalVisible} onClose={hideModal}>
        <ModalView>
          <ModalText>Deletar Compra?</ModalText>
          <ButtonWrapper>
            <OutlinedButton onClick={() => hideModal()}>
              <OutlinedButtonText>Cancelar</OutlinedButtonText>
            </OutlinedButton>
            <FillButton
              onClick={() => handleDeletePurchase()}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress color="warning" />
              ) : (
                <FillButtonText>Deletar</FillButtonText>
              )}
            </FillButton>
          </ButtonWrapper>
        </ModalView>
      </ModalContainer>

    </PurchaseDetailsContainer>
  );
};
