import styled from "styled-components";
export const DashboardContainer = styled.div`
  padding: 0 2.5rem;
  max-width: 1220px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
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
  gap: 1.25rem;
`;
export const ChartListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 2.5rem;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.gray_500};
    background-color: transparent;
  }
`;
export const PurchaseListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 2.5rem;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.gray_500};
    background-color: transparent;
  }
`;
export const PurchaseListTitleWrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HistoryButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: transparent;
  color: ${(props) => props.theme.green_300};
  border: 1px solid transparent;
  border-radius: 0px;
  font-size: 1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: border-bottom 200ms;
  &:hover {
    color: ${(props) => props.theme.green_500};
    border-bottom: 1px solid ${(props) => props.theme.green_500};
    transition: border-bottom 200ms;
    cursor: pointer;
  }
`;
export const PurchaseListScroller = styled.div`
  height: 48vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
export const ChartListScroller = styled.div`
  width: 100%;
  height: 48vh;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  overflow-x: hidden;
`;

const BaseContentSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ChartList = styled(BaseContentSection)`
`;
export const PurchaseList = styled(BaseContentSection)`
  //padding: 1rem 0.5rem;
`;
