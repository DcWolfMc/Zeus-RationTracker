import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0.5rem 2rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  //margin-top: -5.5rem;
  background-color: ${props=>props.theme.gray_300};
  //border: 2px solid ${props=>props.theme.gray_button_hover};
  //border-radius: 36px;
  //box-shadow: 0px 10px 5px -3px rgba(0,0,0,0.2);
`;
export const BackButton = styled.button`
min-height: 100%;
padding: 0 1rem;
display: flex;
justify-content: center;
align-items: center ;
color: ${props=>props.theme.gray_700};

border: 0;
background-color: ${props=>props.theme.gray_300};
transition: background-color 200ms;
&:hover{
    background-color: ${props=>props.theme.gray_500};
    transition: background-color 200ms;
    cursor: pointer;
}
`