import { useEffect, useState } from "react";
import { PurchaseListItem } from "../../components/PurchaseListItem";
import { InfoBox } from "../../components/infoBox";
import {
  SummaryContainer,
  DashboardContainer,
  DashboardContent,
  ChartListWrapper,
  PurchaseListWrapper,
  ChartList,
  PurchaseList,
  PurchaseListScroller,
} from "./styles";
import { PurchaseData } from "../../@types/purchaseData";
import { getPurchases } from "../../services/api";
import { parseISO } from "date-fns";
import { DashboardCharts } from "../../components/DashboardCharts";

export const Dashboard = () => {
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if(loading){

      async function CallApiData() {
        
        await getPurchases().then((response)=>{
          const sortedPurchasesData: PurchaseData[] = response.data.sort(
            (a: PurchaseData, b: PurchaseData) =>
            parseISO(b.date_of_purchase).getTime() -
            parseISO(a.date_of_purchase).getTime()
            );
            setPurchases(sortedPurchasesData);
            //console.log("getPurchases:", sortedPurchasesData);
        }).finally(()=>{
          setLoading(false)
        });
        
        
        }
        CallApiData();
      }
  }, [loading]);
  return (
    <DashboardContainer>
      <SummaryContainer>
        <InfoBox purchasesData={purchases} />
        <InfoBox monthsToSub={1} purchasesData={purchases} />
        <InfoBox monthsToSub={0} purchasesData={purchases} variant="green" />
      </SummaryContainer>
      <DashboardContent>
        <ChartListWrapper>
          <h1>Dashboard</h1>
          <PurchaseListScroller>
          <ChartList>
            <DashboardCharts/>
            <DashboardCharts/>
          </ChartList>
          </PurchaseListScroller>
        </ChartListWrapper>
        <PurchaseListWrapper>
          <h1>Compras</h1>
          <PurchaseListScroller>
            <PurchaseList>
              {purchases.map((purchase) => {
                return (
                  <PurchaseListItem
                    key={purchase._id}
                    purchaseData={purchase}
                    purchaseId={purchase._id}
                  />
                );
              })}
            </PurchaseList>
          </PurchaseListScroller>
        </PurchaseListWrapper>
      </DashboardContent>
    </DashboardContainer>
  );
};
