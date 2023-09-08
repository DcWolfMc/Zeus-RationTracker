import React, { FunctionComponent, useState } from "react";
import { Dimensions, ScrollView, Text } from "react-native";
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
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
}

export const PurchaseEditScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <Container>
      <ContainerScroller>
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
          <EditTextInput
            label={"Observações"}
            placeholder="Observações"
            multiline={true}
            numberOfLines={3}
          />
        </InputsWrapper>

        <ButtonWrapper>
          <OutlinedButton>
            <OutlinedButtonText>Cancelar</OutlinedButtonText>
          </OutlinedButton>
          <FillButton>
            <FillButtonText>Concluir</FillButtonText>
          </FillButton>
        </ButtonWrapper>
      </ContainerScroller>
    </Container>
  );
};
