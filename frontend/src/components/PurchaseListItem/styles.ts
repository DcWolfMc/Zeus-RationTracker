import styled from "styled-components";

export const PurchaseListItemContainer = styled.button`
min-width: 300px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: flex-start;
padding:0.5rem;
background-color: ${props => props.theme.gray_300};
border: 0;
border-radius: 8px;
&:hover{
    background-color: ${props => props.theme.gray_button_hover};
    cursor: pointer;
}
`
export const TextWrapper = styled.div`
width: 100%;
padding-top: 0.5rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: start;
`
export const DateWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 0.5rem;
`

const BaseText = styled.span`
font-size: 1.5rem;
font-weight: bold;
`

export const TitleWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`
export const Title = styled(BaseText)`
max-width: 90%;
font-weight: bold;
font-size: 1.25rem;
color: ${props => props.theme.gray_700};
`
export const Quantity = styled(BaseText)`
font-weight: 600;
font-size: 1rem;
color: ${props => props.theme.gray_500};
`

export const Value = styled(BaseText)`
font-weight: bold;
font-size: 1.25rem;
color: ${props => props.theme.green_300};
`

export const LocalText = styled(BaseText)`
max-width: 60%;
font-weight: bold;
font-size: 0.75rem;
color: ${props => props.theme.gray_500};
`
export const DateText = styled(BaseText)`
font-weight: bold;
font-size: 0.75rem;
color: ${props => props.theme.gray_500};
`