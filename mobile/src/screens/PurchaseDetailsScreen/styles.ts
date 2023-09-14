import styled from "styled-components/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IconButton } from "../../components/IconButton";
import { Divider } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type IconType = typeof Feather;

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.gray_300};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type ScrollViewType = typeof ScrollView;
export const ContainerScroller: ScrollViewType = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: "center", gap: 32 },
})`
  width: 100%;
  flex: 1;
  display: flex;
  gap: ${RFValue(36)}px;
`;
export const Header = styled.View`
  width: 100%;
  margin-top: ${RFValue(32)}px;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

const BaseText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
`;

export const TopText = styled(BaseText)`
  font-weight: bold;
  font-size: ${RFValue(32)}px;
  color: ${(props) => props.theme.colors.gray_700};
`;
export const MiddleText = styled(BaseText)`
  font-weight: bold;
  font-size: ${RFValue(32)}px;
  color: ${(props) => props.theme.colors.green_300};
`;
export const BottonText = styled(BaseText)`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray_600};
`;
export const ButtonWrapper = styled.View`
  padding: 0px ${RFValue(16)}px;
  display: flex;
  flex-direction: row;
  gap: ${RFValue(64)}px;
`;
type IconButtonType = typeof IconButton;

const BaseIconButton: IconButtonType = styled(IconButton).attrs({
  iconSize: 24,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  color: ${(props) => props.theme.colors.gray_300};
`;

export const EditButton: IconButtonType = styled(BaseIconButton)`
  background-color: ${(props) => props.theme.colors.gray_700};
`;

export const TrashButton: IconButtonType = styled(BaseIconButton)`
  background-color: ${(props) => props.theme.colors.red_500};
`;
export const DetailsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${RFValue(4)}px;
`;
export const DetailsTitle = styled(BaseText)`
  padding: ${RFValue(8)}px 0px;
  font-weight: bold;
  font-size: ${RFValue(24)}px;
  color: ${(props) => props.theme.colors.gray_800};
  text-align: center;
`;
export const DetailsItemWrapper = styled.View`
  padding: 0px ${RFValue(16)}px;
  display: flex;
  flex-direction: column;
  gap: ${RFValue(8)}px;
  justify-content: center;
`;
export const ItemTitle = styled(BaseText)`
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.theme.colors.gray_600};
`;
export const ItemValue = styled(BaseText)`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.colors.gray_800};
`;
export const ItemDivider = styled(Divider)`
  border-color: ${(props) => props.theme.colors.gray_800};
  border-width: 0.75px;
  opacity: 0.25;
`;
export const ModalContainer = styled.View` 
  flex:1;
  display: "flex";
  flex-direction: column;
  justify-content: center;
  background-color: ${props=>props.theme.colors.gray_800}aa;
  `;
  export const ModalView = styled.View`
  margin: ${RFValue(16)}px ${RFValue(8)}px;
  padding: ${RFValue(32)}px ${RFValue(16)}px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${RFValue(32)}px;

  border-radius: 8px;
  background-color: ${props=>props.theme.colors.gray_200};
  `
  export const ModalText = styled(BaseText)`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${props=>props.theme.colors.gray_800};
  `
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
    background-color: ${(props) => props.theme.colors.red_500};
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
  
