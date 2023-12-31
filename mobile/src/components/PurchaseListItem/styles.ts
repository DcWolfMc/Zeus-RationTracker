import styled from "styled-components/native";
import { Text,TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

type TouchableOpacityType = typeof TouchableOpacity
export const PurchaseListItemContainer:TouchableOpacityType = styled.TouchableOpacity`
margin-bottom: ${RFValue(8)}px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: flex-start;
padding: ${RFValue(8)}px ${RFValue(8)}px;
background-color: ${props => props.theme.colors.gray_200};
border-radius: 8px;
`
export const TextWrapper = styled.View`
width: 100%;
padding-top: ${RFValue(8)}px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: start;
`
export const DateWrapper = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: ${RFValue(8)}px;
`
type IconType = typeof Feather
export const Icon: IconType = styled(Feather)`
font-weight: bold;
`

const BaseText = styled.Text`
font-size: ${RFValue(24)}px;
font-weight: bold;
`

export const TitleWrapper = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`
export const Title = styled(BaseText)`
max-width: 90%;
font-weight: bold;
font-size: ${RFValue(20)}px;
color: ${props => props.theme.colors.gray_700};
`
export const Quantity = styled(BaseText)`
font-weight: 600;
font-size: ${RFValue(16)}px;
color: ${props => props.theme.colors.gray_500};
`

export const Value = styled(BaseText)`
font-weight: bold;
font-size: ${RFValue(20)}px;
color: ${props => props.theme.colors.green_300};
`

export const LocalText = styled(BaseText)`
max-width: 60%;
font-weight: bold;
font-size: ${RFValue(14)}px;
color: ${props => props.theme.colors.gray_500};
`
export const DateText = styled(BaseText)`
font-weight: bold;
font-size: ${RFValue(14)}px;
color: ${props => props.theme.colors.gray_500};
`