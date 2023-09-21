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
  PurchaseListTitleWrapper,
  HistoryButton,
  ChartListScroller,
} from "./styles";
import { PurchaseData } from "../../@types/purchaseData";
import { getPurchases } from "../../services/api";
import { parseISO } from "date-fns";
import { DashboardCharts } from "../../components/DashboardCharts";
import { ArrowRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (loading) {
      async function CallApiData() {
        await getPurchases()
          .then((response) => {
            const sortedPurchasesData: PurchaseData[] = response.data.sort(
              (a: PurchaseData, b: PurchaseData) =>
                parseISO(b.date_of_purchase).getTime() -
                parseISO(a.date_of_purchase).getTime()
            );
            setPurchases(sortedPurchasesData);
            console.log("getPurchases:", sortedPurchasesData);
          })
          .finally(() => {
            setLoading(false);
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
          <ChartListScroller>
              <ChartList>
                <DashboardCharts data={purchases} type="years" loading={loading} setLoading={setLoading} />
                <DashboardCharts data={purchases} type="acumulative-month" loading={loading} setLoading={setLoading}/>
              </ChartList>
          </ChartListScroller>
        </ChartListWrapper>
        <PurchaseListWrapper>
          <PurchaseListTitleWrapper>
            <h1>Compras</h1>
            <HistoryButton onClick={() => navigate("/history")}>
              Ver todos
              <ArrowRight />
            </HistoryButton>
          </PurchaseListTitleWrapper>
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
