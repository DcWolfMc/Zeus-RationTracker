import { View } from "react-native";
import {InfoBoxContainer, BottonText, MiddleText,TopText, TopTextHighlight,MBTextWrapper,TopTextWrapper } from"./styles"
import React from "react";
export const InfoBox=()=>{
    return(<InfoBoxContainer>
        <TopTextWrapper>
            <TopText>Total no mês:</TopText>
            <TopTextHighlight>Maio</TopTextHighlight>
        </TopTextWrapper>
        <MBTextWrapper>
            <MiddleText>R$ 17.400,00</MiddleText>
            <BottonText>Última compra há 11 dias</BottonText>
        </MBTextWrapper>
    </InfoBoxContainer>);
}