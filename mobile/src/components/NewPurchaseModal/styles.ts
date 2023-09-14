import styled from "styled-components/native";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IconButton } from "../IconButton";
import { Divider, TextInput,  } from "react-native-paper";
import { defaultTheme } from "../../global/styles/theme";
type ContentViewType = typeof KeyboardAvoidingView
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Container = styled.View`
  flex:1; 
  display: "flex";
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${props=>props.theme.colors.gray_800}aa;
  `;

export const ContentView:ContentViewType = styled.KeyboardAvoidingView`
max-height: 95%;
  background-color: ${(props) => props.theme.colors.gray_300};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: ${RFValue(36)}px;
  padding: ${RFValue(16)}px ${RFValue(20)}px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top: 3px solid ${props=>props.theme.colors.gray_600};
  
`;

type ScrollViewType = typeof ScrollView;
export const ContainerScroller: ScrollViewType = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: "center", gap: 32 },
})`
  width: 100%;
  display: flex;
`;
const BaseText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
`;
export const Title = styled(BaseText)`
  padding: ${RFValue(8)}px 0px 0px 0px;
  font-weight: bold;
  font-size: ${RFValue(24)}px;
  color: ${(props) => props.theme.colors.gray_800};
  text-align: center;
`;
export const InputsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: ${RFValue(24)}px;
`;
export const InputsHorizontalWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
type TextInputType = typeof TextInput;
export const EditTextInput: TextInputType = styled(TextInput).attrs({
  mode: "outlined",
  textColor: defaultTheme.colors.gray_700,
  outlineColor: defaultTheme.colors.gray_600,
})`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray_400};
`;
export const EditMultilineTextInput: TextInputType = styled(TextInput).attrs({
  mode: "outlined",
  textColor: defaultTheme.colors.gray_700,
  outlineColor: defaultTheme.colors.gray_600,
})`
${Platform.OS==="ios"&&{height: RFValue(90)}}
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray_400};
`;
type IconType = typeof Feather
export const Icon: IconType = styled(Feather)`
font-weight: bold;
`


export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0px ${RFValue(16)}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
type ButtonType = typeof TouchableOpacity;

const BaseButton: ButtonType = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  min-width: ${RFValue(120)}px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
export const OutlinedButton:ButtonType = styled(BaseButton)`
  border-color: ${(props) => props.theme.colors.gray_600};
  border-width: 2px;
`;

export const FillButton:ButtonType = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.green_300};
`;

export const OutlinedButtonText = styled(BaseText)`
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.theme.colors.gray_600};
`;

export const FillButtonText = styled(BaseText)`
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.theme.colors.gray_200};
`;
