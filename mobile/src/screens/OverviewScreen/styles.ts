import styled from "styled-components/native";
import { Text, TouchableOpacity, View } from "react-native";
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
export const Header = styled.View`
min-height: 30%;
display: flex;
flex-direction: row;
padding:${RFValue(24)}px ${RFValue(16)}px;
justify-content: space-between;

background-color: ${props => props.theme.colors.green_300};
`
export const Logo = styled.Image`
`

export const HeaderButtonWrapper = styled.View`
height: ${RFValue(48)}px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
//gap: ${RFValue(8)}px;
`
type TouchableOpacityType = typeof TouchableOpacity
export const NewPurchaseButton:TouchableOpacityType = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: ${RFValue(8)}px;
padding: ${RFValue(8)}px ${RFValue(20)}px;
background-color: ${props => props.theme.colors.yellow_300};
//border-width: 3px;
border-radius: 8px;

`
export const NewPurchaseText = styled.Text`
font-size: ${RFValue(16)}px;
font-weight: bold;
font-family: "Roboto";
color: ${props => props.theme.colors.gray_300};
`
export const Icon: IconType = styled(Feather)`
font-weight: bold;
`
type ViewProps = typeof View

export const ContentView:ViewProps = styled.View`
/* position:relative; */
width:100%;
display:flex;
flex-direction: column;
/* margin-top:${RFPercentage(-10)}px; */
gap:${RFValue(8)}px;
`

type ScrollViewType = typeof ScrollView

export const InfoBoxScroller: ScrollViewType = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingHorizontal: 54, },

})`
position:relative;
flex-grow:0;
z-index:10;
width:100%;
display:flex;
margin-top:${RFPercentage(-10)}px;
gap:${RFValue(16)}px;
`
export const PurchasesListWrapper = styled.View`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap: ${RFValue(16)}px;
`
export const PurchasesListHeader = styled.View`

padding: ${RFValue(8)}px ${RFValue(16)}px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`

export const PurchasesListHeaderText = styled.Text`
font-size: ${RFValue(20)}px;
font-weight: 400;
color: ${props=>props.theme.colors.gray_600};

`
export const PurchasesList:ScrollViewType = styled.ScrollView.attrs({
    alwaysBounceVertical:false,
    contentContainerStyle: { paddingHorizontal: 10},
})`
width:100%;
height:60%;
display:flex;

`

const TEXT_COLORS = {
    green: 'green_300',
    yellow: 'yellow_300',
} as const

interface SimpleTextProps {
    textColor: keyof typeof TEXT_COLORS;
}

export const SimpleText = styled(Text) <SimpleTextProps>`
color: ${props => props.theme.colors[TEXT_COLORS[props.textColor]]};
`