import styled from "styled-components";

export const HistoryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
export const TitleWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 0.5rem;

`
export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  //margin-top: -5.5rem;
  background-color: ${props=>props.theme.gray_300};
  //border: 2px solid ${props=>props.theme.gray_button_hover};
  border-radius: 36px;
  //box-shadow: 0px 10px 5px -3px rgba(0,0,0,0.2);
  form{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    input {
      flex: 1;
      border-radius: 8px;
      border: 0;
      background-color: ${(props) => props.theme.gray_400};
      color: ${(props) => props.theme.gray_700};
      padding: 0.5rem 1rem;

      &::placeholder {
        color: ${(props) => props.theme.gray_500};
      }
    }
    button[type="submit"] {
      border: 0;
      height: 40px;
      background-color: ${(props) => props.theme.yellow_300};
      color: ${(props) => props.theme.gray_200};
      font-weight: bold;
      padding: 0.5rem 1.25rem;
      border-radius: 6px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.yellow_500};
        transition: background-color 200ms;
        cursor: pointer;
      }
      &:disabled {
        opacity: 0, 6%;
        cursor: not-allowed;
      }
  }
}
`
export const BackButton = styled.button`
height: 60px;
width: 60px;
padding: 0 1rem;
display: flex;
justify-content: center;
align-items: center ;
color: ${props=>props.theme.gray_700};
border-radius: 100%;
border: 2px solid ${props=>props.theme.gray_700};
background-color: transparent;
transition: background-color 200ms;
&:hover{
    background-color: ${props=>props.theme.gray_700};
    color: ${props=>props.theme.gray_400};
    transition: background-color 200ms;
    cursor: pointer;
}
`




export const PurchaseTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin: 1.5rem 0;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme.gray_200};

    //display: flex;
    //flex-direction: row;
    //justify-content: center;
    //align-items: center;

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      //background-color: ${(props) => props.theme.yellow_500};
      //color: ${(props) => props.theme.gray_300};
      //z-index: 10;
      //box-shadow: -6px 0px 5px -3px rgba(0,0,0,0.2);
    }
  }
`;


export const TdPrice = styled.td`
  text-align: start;
  color: ${(props) => props.theme.green_300};
`;

export const TdDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25rem;
`;
const BaseIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: 0;
  border-radius: 100%;
  color: ${(props) => props.theme.gray_300};
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
export const DetailsButton = styled.button`
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.gray_600};
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: 2px solid ${(props) => props.theme.gray_600};
  border-radius: 20px;
  background-color: transparent;
  transition: background-color 200ms;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.gray_600};
    color: ${(props) => props.theme.gray_300};
    transition: background-color 200ms;
  }
`;
export const EditButton = styled(BaseIconButton)`
  //background-color: ${(props) => props.theme.gray_700};
  &:hover {
    background-color: ${(props) => props.theme.gray_900}55;
  }
`;
export const VisitButton = styled(BaseIconButton)`
  //background-color: ${(props) => props.theme.gray_700};
  &:hover {
    background-color: ${(props) => props.theme.gray_900}55;
  }
`;

export const TrashButton = styled(BaseIconButton)`
  color: ${(props) => props.theme.red_500};
  &:hover {
    color: ${(props) => props.theme.red_700};
    &:hover {
      background-color: ${(props) => props.theme.gray_900}55;
    }
  }
`;
