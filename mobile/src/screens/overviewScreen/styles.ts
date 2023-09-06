import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
background-color: ${props => props.theme.colors.gray_300};
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const TEXT_COLORS={
    green: 'green_300',
    yellow: 'yellow_300',
}as const

interface SimpleTextProps {
    textColor: keyof typeof TEXT_COLORS;
}

export const SimpleText = styled.Text<SimpleTextProps>`
color: ${props=>props.theme.colors[TEXT_COLORS[props.textColor]]};
`