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
      color: ${props.theme.gray_200};
    `}

  header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 0.25rem;
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 0.5rem;
    
  }
`;

interface HeaderTextProps {
  variant?: "green";
}
export const HeaderText = styled.samp<HeaderTextProps>`
  font-weight: bold;
  font-size: 1.25rem;
  ${(props) =>
      props.variant === "green" &&
      css`
        color: ${props.theme.gray_200};
      `}
`;
interface HeaderTextHighlightProps {
  variant?: "green";
}
export const HeaderTextHighlight = styled.samp<HeaderTextHighlightProps>`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${(props) =>
    props.variant === "green" ? props.theme.yellow_300 : props.theme.green_300};
`;
