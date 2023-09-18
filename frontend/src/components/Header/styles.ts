import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.green_300};
  padding: 1rem 2.5rem 8.75rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  img{
    &:hover{
      cursor: pointer;
    }
  }
`;
export const NewPurchaseButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  background-color: ${(props) => props.theme.yellow_300};
  color: ${(props) => props.theme.gray_200};

  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.yellow_500};
    transition: background-color 200ms;
  }
`;
