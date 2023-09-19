import { styled } from "styled-components";
export const LineChartContainer = styled.div`
  min-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
  padding-top: 1.5rem;
  background-color: ${(props) => props.theme.gray_300};
  border: 0;
  border-radius: 8px;
  &:hover {
    background-color: ${(props) => props.theme.gray_button_hover};
  }
`;

export const HeaderText = styled.samp`
  font-weight: bold;
  font-size: 1.25rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const HeaderTextHighlight = styled.samp`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${(props) => props.theme.green_300};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 0.25rem;
`;
