import { css, styled } from "styled-components";

interface SummaryCardProps {
    variant?: "green";
  }
  export const SummaryCard = styled.div<SummaryCardProps>`
    background-color: ${(props) => props.theme.gray_200};
    border-radius: 6px;
    padding: 2rem;
  
    ${(props) =>
      props.variant === "green" &&
      css`
        background-color: ${props.theme.green_300};
        border: 3px solid ${props.theme.yellow_300};
      `}
    header {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: start;
      gap: 0.5rem;
    }
    footer {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 0.5rem;
    }
  `;
  export const HeaderText = styled.samp`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${props=>props.theme.gray_700};
  `
    export const HeaderTextHighlight = styled.samp`
    font-weight: bold;
    font-size: 1.25rem;
    color: ${props=>props.theme.green_300};
    `