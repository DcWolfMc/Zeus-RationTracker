import styled, { css } from "styled-components";
interface TextProps{
    variant?: "green";
}
export const Text = styled.strong<TextProps>`
font-weight: bold;
font-size: 2rem;
line-height: 2rem;
color: ${props=>props.theme.gray_700};
${(props) =>
      props.variant === "green" &&
      css`
        color: ${props.theme.gray_200};
      `}

`