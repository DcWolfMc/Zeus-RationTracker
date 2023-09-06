import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
type IconType = typeof Feather
interface ButtonProps {
    color: string
}


export const Button = styled.TouchableOpacity<ButtonProps>`
height: ${RFValue(42)}px;
display: flex;
flex-direction: row;
align-items: center;
border-radius: 100px;
background-color: ${props=>props.color};

`
export const Icon:IconType = styled(Feather)`
font-weight: bold;
`