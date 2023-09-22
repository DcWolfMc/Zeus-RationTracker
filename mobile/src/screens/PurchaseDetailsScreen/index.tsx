import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Alert, Dimensions, Modal, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { PurchaseStackParamList, RootStackParamList } from "../../Routes";
import {
  Container,
  BottonText,
  Header,
  MiddleText,
  TopText,
  ButtonWrapper,
  EditButton,
  TrashButton,
  DetailsWrapper,
  DetailsTitle,
  DetailsItemWrapper,
  ItemValue,
  ItemTitle,
  ItemDivider,
  ContainerScroller,
  ModalContainer,
  FillButton,
  FillButtonText,
  OutlinedButton,
  OutlinedButtonText,
  ModalView,
  ModalText,
  ModalButtonWrapper
} from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { PurchaseData, templatePurchaseData } from "../../@types/purchaseData";
import { DeletePurchaseById, getPurchaseById } from "../../services/api";
import { captalizeText } from "../../utils/masks";
import { formatNumber } from "react-native-currency-input";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useFocusEffect,useIsFocused, } from "@react-navigation/native";
import { ToastMassageError, ToastMassageSuccess } from "../../utils/Toast";
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<
    PurchaseStackParamList,
    "PurchaseDetails"
  >;
  route: RouteProp<PurchaseStackParamList, "PurchaseDetails">;
}

export const PurchaseDetailsScreen: FunctionComponent<OverviewScreenProps> = ({
  route,
  navigation,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const { purchaseId } = route.params;
  const [purchaseData, setPurchaseData] = useState<PurchaseData>(templatePurchaseData);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false)
  const dateText = format(
    new Date(purchaseData.date_of_purchase),
    "EEEE', dia 'dd' de 'MMMM' de ' yyyy",
    { locale: ptBR }
  );
  const totalValue = purchaseData.quantity * purchaseData.ration_price
  useFocusEffect(useCallback(()=>{
    async function CallApiData() {
      const response = await getPurchaseById(purchaseId);
      setPurchaseData(response.data);
      //console.log("getPurchaseById:", response.data);
    }
    CallApiData(); 
  },[]))
  function handleModal() {
    setModalVisible(true);
  }
  function hideModal() {
    setModalVisible(false);
  }
  async function handleDeletePurchase() {
    setLoading(true);
    DeletePurchaseById(purchaseId)
      .then((res) => {
        ToastMassageSuccess("Compra deletada!")
        navigation.goBack();
      })
      .catch((error) => {
        ToastMassageError("Não foi possível deletar a compra");
        console.log("DeletePurchaseById: ", error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <ContainerScroller>
        <Header>
          <TopText>{captalizeText(purchaseData.name)}</TopText>
          <MiddleText>
            R$ {formatNumber(totalValue, { precision: 2 })}
          </MiddleText>
          <BottonText>{captalizeText(dateText)}</BottonText>
        </Header>
        <ButtonWrapper>
          <EditButton
            icon={"edit"}
            iconColor={defaultTheme.colors.gray_300}
            onPress={() => {
              navigation.navigate("PurchaseEdit", {
                purchaseData: purchaseData,
                purchaseId: purchaseId,
              });
            }}
          />
          <TrashButton
            icon={"trash"}
            onPress={()=>handleModal()}
            iconColor={defaultTheme.colors.gray_300}
          />
        </ButtonWrapper>
        <DetailsWrapper>
          <DetailsTitle>Detalhes</DetailsTitle>
          <DetailsItemWrapper>
            <ItemTitle>Local de Compra</ItemTitle>
            <ItemValue>{purchaseData.place_of_purchase}</ItemValue>
          </DetailsItemWrapper>
          <ItemDivider />
          <DetailsItemWrapper>
            <ItemTitle>Quantidade</ItemTitle>
            <ItemValue>{purchaseData.quantity}</ItemValue>
                </DetailsItemWrapper>
          <ItemDivider />
          <DetailsItemWrapper>
            <ItemTitle>Valor unitário</ItemTitle>
            <ItemValue>
              R$ {formatNumber(purchaseData.ration_price, { precision: 2 })}
            </ItemValue>
          </DetailsItemWrapper>
          <ItemDivider />
          <DetailsItemWrapper>
            <ItemTitle>Peso da ração</ItemTitle>
            <ItemValue>{purchaseData.ration_weight} Kg</ItemValue>
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
              {purchaseData.observations&&(purchaseData.observations)}
            </ItemValue>
          </DetailsItemWrapper>
        </DetailsWrapper>
      </ContainerScroller>
      
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
      onDismiss={()=>hideModal()}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(false);
      }}
    >
      <ModalContainer>
        <ModalView>
          <ModalText>Deletar Compra?</ModalText>
        <ModalButtonWrapper>
              <OutlinedButton onPress={()=>hideModal()}>
                <OutlinedButtonText>Cancelar</OutlinedButtonText>
              </OutlinedButton>
              <FillButton onPress={()=> handleDeletePurchase()}>
                {loading ? (
                  <ActivityIndicator
                    animating={true}
                    color={defaultTheme.colors.gray_200}
                  />
                ) : (
                  <FillButtonText>Deletar</FillButtonText>
                )}
              </FillButton>
            </ModalButtonWrapper>
        </ModalView>
      </ModalContainer>
    </Modal>
    </Container>

  );
};
