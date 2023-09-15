import { InfoBox } from "../../components/infoBox";
import { SummaryContainer } from "./styles"

export const Dashboard = () => {
  return (
    <div>
      <SummaryContainer>
        <InfoBox purchasesData={[]}/>
        <InfoBox monthsToSub={1} purchasesData={[]}/>
        <InfoBox monthsToSub={0} purchasesData={[]} variant="green"/>
      </SummaryContainer>
      <h1>Dashboard</h1>
    </div>
  );
};
