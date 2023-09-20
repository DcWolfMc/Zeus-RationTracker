import styled from "styled-components";

export const LayoutContainer = styled.div`
    //max-width: 74rem;
    //height: calc(110vh - 10rem);
    //margin: 5rem auto;
    //padding: 2.5rem;
    
    //background: ${props =>props.theme["gray-800"]};
    //border-radius: 8px;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.green_300};
  padding: 1rem 2.5rem
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