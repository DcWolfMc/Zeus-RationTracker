import styled from "styled-components/native";
import { Text, View } from "react-native";
import { RFPercentage, RFValue, } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type IconType = typeof Feather

export const Container = styled.SafeAreaView`
background-color: ${props => props.theme.colors.gray_300};
flex: 1;
display: flex;
flex-direction: column;

`
