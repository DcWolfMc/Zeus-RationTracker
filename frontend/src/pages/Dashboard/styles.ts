import styled from "styled-components";
export const DashboardContainer = styled.div`
padding: 0 2.5rem;
max-width: 1220px;
display: flex;
flex-direction: column;
gap:2rem;
`
export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  //padding: 0 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

export const DashboardContent = styled.div`
width: 100%;
margin: 0 auto;
padding: 1rem 0 2rem;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
gap:1.25rem;
`
export const ChartListWrapper = styled.section`
::-webkit-scrollbar {
  
  width: 4px;
}
::-webkit-scrollbar-track {
  background: ${props=>props.theme.gray_500}; 
  background-color: transparent;
}

`
export const PurchaseListWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: start;
gap: 2.5rem;
::-webkit-scrollbar {
  
  width: 4px;
}
::-webkit-scrollbar-track {
  background: ${props=>props.theme.gray_500}; 
  background-color: transparent;
}

`
export const PurchaseListTitleWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const PurchaseListScroller = styled.div`
height: 48vh;
display: flex;
flex-direction: column;
overflow-y: auto;

`
export const ChartListScroller = styled.div`
height: 48vh;
display: flex;
flex-direction: column;
overflow-y: auto;

`

const BaseContentSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
gap: 0.5rem;
`

export const ChartList = styled(BaseContentSection)`
`
export const PurchaseList = styled(BaseContentSection)`
//padding: 1rem 0.5rem;
`