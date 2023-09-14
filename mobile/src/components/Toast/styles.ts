import styled, { css } from "styled-components/native";
import { View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import Animated, { AnimateProps } from "react-native-reanimated";
type ViewType = typeof Animated.View
interface ViewProps extends ViewType {
    visible: boolean;
}

export const ToastView: ViewType = styled(Animated.View)`
bottom: ${RFValue(20)}px;
padding: ${RFValue(8)}px ${RFValue(8)}px;
position: absolute;
z-index: 999;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

background-color: ${props => props.theme.colors.red_500};
border-radius: 8px;


`
export const Text = styled.Text`
color: ${props => props.theme.colors.gray_200};
font-size: ${RFValue(14)}px;
`