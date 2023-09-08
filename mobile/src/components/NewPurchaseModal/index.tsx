import React, { FunctionComponent, useState } from "react";
import {Alert, Modal, Dimensions, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
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
} from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { TextInput } from "react-native-paper";

interface Props{
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal:()=>void
}

export const NewPurchaseModal:FunctionComponent<Props> = ({setModalVisible,modalVisible,handleModal}) => {
  const windowWidth = Dimensions.get("window").width;
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
              <Container>
        <Title>Edição</Title>
        <InputsWrapper>
          <EditTextInput label={"Nome"} />
          <EditTextInput label={"Valor(R$)"} left={<TextInput.Affix text="R$" textStyle={{fontWeight:"bold"}} />} keyboardType="numeric"/>
          <InputsHorizontalWrapper>
            <EditTextInput

              label={"Data da Compra"}
              placeholder="DD/MM/YYYY"
              left={<TextInput.Icon icon={"calendar"}/>}
              keyboardType="numeric"
              inputMode="numeric"
              style={{ width: "50%" }}
            />
            <EditTextInput
              label={"Peso(Kg)"}
              placeholder="Peso(Kg)"
              keyboardType="numeric"
              inputMode="numeric"
              style={{ width: "50%" }}
            />
          </InputsHorizontalWrapper>
          <EditTextInput
            label={"Local de compra"}
            placeholder="Local de compra"
          />
          <EditTextInput
            label={"marca da Ração"}
            placeholder="marca da Ração"
          />
        </InputsWrapper>

        <ButtonWrapper>
          <OutlinedButton onPress={handleModal}>
            <OutlinedButtonText>Cancelar</OutlinedButtonText>
          </OutlinedButton>
          <FillButton>
            <FillButtonText>Concluir</FillButtonText>
          </FillButton>
        </ButtonWrapper>
    </Container>
      </Modal>
  );
};