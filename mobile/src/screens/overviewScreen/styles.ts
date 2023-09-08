import styled from "styled-components/native";
import { Text } from "react-native";
import { RFPercentage, RFValue, } from "react-native-responsive-fontsize";
import { Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, {CarouselProps, CarouselProperties} from "react-native-snap-carousel";

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
gap: ${RFValue(8)}px;
`
export const NewPurchaseButton = styled.TouchableOpacity`
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
type ScrollViewType = typeof ScrollView

export const InfoBoxScroller: ScrollViewType = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 54, },

})`
width:100%;
display:flex;
position:absolute;
margin-top:${RFPercentage(-10)}px;
gap:${RFValue(16)}px;
`

export const InfoBoxScroller2 = styled(Carousel).attrs({
    showHorizontalScrollIndicator: true,
})`
width:100%;
position:absolute;
margin-top:${RFPercentage(-10)}px;
`

export const PurchasesList:ScrollViewType = styled.ScrollView`

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