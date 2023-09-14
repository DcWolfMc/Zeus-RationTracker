import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Text = styled.Text`
font-weight: bold;
font-size: ${RFValue(32)}px;
color: ${props=>props.theme.colors.gray_700};
`