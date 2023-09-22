import React, { FunctionComponent, useState } from "react";
import { Dimensions, ScrollView, Text, Keyboard, Platform } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PurchaseStackParamList, RootStackParamList } from "../../Routes";
import {
  currencyMask,
  currencyMaskToNumber,
  onlyNumbersMask,
  weightMask,
} from "../../utils/masks";
import { formatNumber, FormatNumberOptions } from "react-native-currency-input";
import {
  Container,
  ContainerScroller,
  Title,
  ButtonWrapper,
  FillButton,
  FillButtonText,
  InputsWrapper,
  OutlinedButton,
  OutlinedButtonText,
  InputsHorizontalWrapper,
  EditTextInput,
  Icon,
  DatePickerButton,
  DatePickerText,
  EditMultilineTextInput,
  DataInputView,
  DataInput,
} from "./styles";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { defaultTheme } from "../../global/styles/theme";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { ToastMassageError, ToastMassageSuccess } from "../../utils/Toast";
import { EditPurchase } from "../../services/api";
import { NewPurchaseData } from "../../@types/purchaseData";
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
  route: RouteProp<PurchaseStackParamList, "PurchaseEdit">;
}

export const PurchaseEditScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
  route,
}) => {
   const {purchaseId, purchaseData} = route.params
  const windowWidth = Dimensions.get("window").width;
  const [name, setName] = useState<string>(purchaseData.name);
  const [quantity, setQuantity] = useState<string>(purchaseData.quantity.toString());
  const [price, setPrice] = useState<string>(formatNumber(purchaseData.ration_price,{precision:2}));
  const [date, setDate] = useState<Date | undefined>(new Date(purchaseData.date_of_purchase));
  const [displayDate, setDisplayDate] = useState<boolean>(false);
  const [observations, setObservations] = useState<string>(purchaseData.observations);
  const [weight, setWeight] = useState<string>(purchaseData.ration_weight.toString());
  const [place, setPlace] = useState<string>(purchaseData.place_of_purchase!="não definido"?purchaseData.place_of_purchase:"");
  const [brand, setBrand] = useState<string>(purchaseData.ration_brand!="não definido"?purchaseData.ration_brand:"");
  const [loading, setLoading] = useState<boolean>(false)

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

  async function handleEditPurchase() {
    setLoading(true);
    const data: NewPurchaseData = {
      name: name,
      quantity: Number(quantity),
      ration_price: currencyMaskToNumber(price),
      date_of_purchase: date.toISOString(),
      ration_weight: Number(weightMask(weight)),
      place_of_purchase: place,
      ration_brand: brand,
      observations: observations,
    };
    EditPurchase(purchaseId, data)
      .then((res) => {
        ToastMassageSuccess("Compra Editada!");
        //console.log("EditPurchase: ", res.data);
        navigation.goBack();
      })
      .catch((error) => {
        ToastMassageError("Não foi possível editar essa compra");
        console.log("EditPurchase: ", error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <Container behavior={Platform.OS==="ios"?"padding": "height"}>
      <ContainerScroller>
        <Title>Edição</Title>
        <InputsWrapper>
          <EditTextInput
            label={"Nome"}
            value={name}
            onChangeText={(text) => setName(text)}
            maxLength={35}
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
                <TextInput.Affix text="R$" textStyle={{ fontWeight: "bold" }} />
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
          {displayDate && (Platform.OS!== "ios"?(
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
                ): (<DataInputView>
                  <DataInput
                    display="inline"
                    maximumDate={new Date()}
                    value={date != undefined ? date : new Date()}
                    mode="date"
                    onChange={(event, date) => {
                      handleDatePicker(date);
                      setDisplayDate(false);
                    }}
                    
                  />
                </DataInputView>))}
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
                <TextInput.Affix text="Kg" textStyle={{ fontWeight: "bold" }} />
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
            maxLength={50}
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
          <OutlinedButton onPress={() => navigation.goBack()}>
            <OutlinedButtonText>Cancelar</OutlinedButtonText>
          </OutlinedButton>
          <FillButton onPress={()=> handleEditPurchase()} disabled={loading}>
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
      </ContainerScroller>
    </Container>
  );
};
