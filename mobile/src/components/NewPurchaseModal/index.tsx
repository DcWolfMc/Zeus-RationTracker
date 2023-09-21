import React, { FunctionComponent, useState } from "react";
import {
  currencyMask,
  currencyMaskToNumber,
  onlyNumbersMask,
  weightMask,
} from "../../utils/masks";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {
  Keyboard,
  Alert,
  Modal,
  Dimensions,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  Container,
  ContentView,
  Title,
  ButtonWrapper,
  FillButton,
  FillButtonText,
  InputsWrapper,
  OutlinedButton,
  OutlinedButtonText,
  InputsHorizontalWrapper,
  EditTextInput,
  ContainerScroller,
  EditMultilineTextInput,
} from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { NewPurchaseData } from "../../@types/purchaseData";
import {
  ToastMassageError,
  ToastMassageErrorComponent,
  ToastMassageSuccess,
  ToastMessageComponentProps,
} from "../../utils/Toast";
import { addPurchase } from "../../services/api";
import { ErrorToast } from "../Toast";
import { Platform } from "react-native";
interface Props {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: () => void;
  visible: boolean;
  onDismiss?: (() => void) | undefined;
}

export const NewPurchaseModal: FunctionComponent<Props> = ({
  setModalVisible,
  visible,
  handleModal,
  onDismiss,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>();
  const [displayDate, setDisplayDate] = useState<boolean>(false);
  const [observations, setObservations] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ToastMessageComponentProps>({
    text: "",
    visible: false,
  });
  function handleFormatPrice(number) {
    setPrice(currencyMask(number));
  }
  function handleFormatQuantity(text: string) {
    setQuantity(onlyNumbersMask(text));
  }
  function handleFormatWeight(text:string) {
    setWeight(weightMask(text))
    
  }
  function handleDatePicker(date: Date) {
    setDisplayDate(false);
    setDate(date);
  }
  function clearAllStates() {
    setName("");
    setQuantity("");
    setPrice("");
    setPlace("");
    setBrand("");
    setObservations("");
    setDate(undefined);
    setWeight("");
  }
  async function handleNewPurchase() {
    setLoading(true);
    const data: NewPurchaseData = {
      name: name,
      quantity: Number(quantity),
      ration_price: currencyMaskToNumber(price),
      date_of_purchase: date ? date.toISOString() : undefined,
      ration_weight: Number(weightMask(weight)),
      place_of_purchase: place,
      ration_brand: brand,
      observations: observations,
    };
    addPurchase(data)
      .then((res) => {
        ToastMassageSuccess("Compra adicionada!");
        clearAllStates();
        //console.log("addPurchase: ", res.data);
        handleModal();
      })
      .catch((error) => {
        setTimeout(() => {
          setError({
            visible: true,
            text: "Dados invalidos",
          });
        }, 0);
        setTimeout(() => {
          setError({
            visible: false,
            text: "Dados invalidos",
          });
        }, 3000);

        //ToastMassageError("Não foi possível adicionar uma compra");
        console.log("addPurchase: ", error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
      onDismiss={onDismiss}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(false);
      }}
    >
      <Container>
        <ContentView behavior="padding" >
          <ContainerScroller>
            <Title>Novo Produto</Title>
            <InputsWrapper>
              <EditTextInput
                label={"Nome"}
                value={name}
                onChangeText={(text) => setName(text)}
                maxLength={35}
                focusable
              />
              <InputsHorizontalWrapper>
                <EditTextInput
                  label={"quantidade"}
                  keyboardType="numeric"
                  inputMode="decimal"
                  style={{ width: "48%" }}
                  value={quantity}
                  onChangeText={(text) => handleFormatQuantity(text)}
                  maxLength={4}
                />

                <EditTextInput
                  label={"Valor unidade(R$)"}
                  left={
                    <TextInput.Affix
                      text="R$"
                      textStyle={{ fontWeight: "bold" }}
                    />
                  }
                  value={price}
                  inputMode="numeric"
                  onChangeText={(text) => {
                    handleFormatPrice(text);
                  }}
                  style={{ width: "48%" }}
                  maxLength={10}
                />
              </InputsHorizontalWrapper>
              <InputsHorizontalWrapper>
                {Platform.OS!== "ios" && displayDate && (
                  <RNDateTimePicker
                    maximumDate={new Date()}
                    value={date != undefined ? date : new Date()}
                    mode="date"
                    onChange={(event, date) => {
                      handleDatePicker(date);
                      setDisplayDate(false);
                    }}
                    positiveButton={{
                      label: "OK",
                      textColor: defaultTheme.colors.green_300,
                    }}
                  />
                )}
                <EditTextInput
                  onPressIn={() => {
                    Keyboard.dismiss();
                    setDisplayDate(true);
                  }}
                  label={"Data da comp."}
                  showSoftInputOnFocus={false}
                  focusable={false}
                  inputMode="none"
                  placeholder="DD/MM/YYYY"
                  value={
                    date !== undefined
                      ? `${date.getDate()}/${
                          date.getMonth() + 1
                        }/${date.getFullYear()}`
                      : ""
                  }
                  left={<TextInput.Icon size={24} icon={"calendar"} />}
                  style={{ width: "48%" }}
                />
                <EditTextInput
                  label={"Peso unidade(Kg)"}
                  placeholder="Peso(Kg)"
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={weight}
                  onChangeText={(text) => handleFormatWeight(text)}
                  right={
                    <TextInput.Affix
                      text="Kg"
                      textStyle={{ fontWeight: "bold" }}
                    />
                  }
                  style={{ width: "48%" }}
                  maxLength={10}
                />
              </InputsHorizontalWrapper>
              <EditTextInput
                label={"Local de compra"}
                placeholder="Local de compra"
                value={place}
                onChangeText={(text) => setPlace(text)}
                maxLength={33}
              />
              <EditTextInput
                label={"Marca da Ração"}
                placeholder="Marca da Ração"
                value={brand}
                onChangeText={(text) => setBrand(text)}
                maxLength={20}
              />
              <EditMultilineTextInput
                label={"Observações"}
                placeholder="Observações"
                multiline={true}
                value={observations}
                onChangeText={(text) => setObservations(text)}
                numberOfLines={3}
                maxLength={200}
              />
            </InputsWrapper>

            <ButtonWrapper>
              <OutlinedButton
                onPress={() => {
                  clearAllStates();
                  handleModal();
                }}
              >
                <OutlinedButtonText>Cancelar</OutlinedButtonText>
              </OutlinedButton>
              <FillButton onPress={() => handleNewPurchase()} disabled={loading}>
                {loading ? (
                  <ActivityIndicator
                    animating={true}
                    color={defaultTheme.colors.gray_200}
                  />
                ) : (
                  <FillButtonText>Concluir</FillButtonText>
                )}
              </FillButton>
            </ButtonWrapper>
            <ErrorToast visibilaty={error.visible} text={error.text} />
          </ContainerScroller>
        </ContentView>
      </Container>
    </Modal>
  );
};
