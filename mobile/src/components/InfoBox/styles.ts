import styled from "styled-components/native";
import { Text } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const InfoBoxContainer = styled.View`
max-width: ${RFValue(252)}px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
padding: ${RFValue(24)}px ${RFValue(16)}px;
background-color: ${props=>props.theme.colors.gray_200};
border-radius: 8px;
`

export const TopTextWrapper = styled.View`
display: flex;
flex-direction: row;
justify-content: start;
align-items: start;
gap: ${RFValue(4)}px;
`
export const MBTextWrapper = styled.View`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: ${RFValue(4)}px;
`

const BaseText = styled.Text`
font-size: ${RFValue(24)}px;
font-weight: bold;
text-align: center;
`

export const TopText = styled(BaseText)`
font-weight: bold;
font-size: ${RFValue(24)}px;
color: ${props=>props.theme.colors.gray_700};
`
export const TopTextHighlight = styled(BaseText)`
font-weight: bold;
font-size: ${RFValue(24)}px;
color: ${props=>props.theme.colors.green_300};
`

export const MiddleText = styled(BaseText)`
font-weight: bold;
font-size: ${RFValue(32)}px;
color: ${props=>props.theme.colors.gray_700};
`
export const BottonText = styled(BaseText)`
font-size: ${RFValue(16)}px;
font-weight: 400;
color: ${props=>props.theme.colors.gray_600};
`