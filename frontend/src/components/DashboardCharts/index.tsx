import {
  CartesianGrid,
  Legend,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import {
  HeaderText,
  HeaderTextHighlight,
  HeaderTextWrapper,
  LineChartContainer,
} from "./styles";
import { defaultTheme } from "../../styles/themes/default";
import {
  LineChartUnit,
  LineChartDataYearTemplate
} from "../../@types/LinechartData";
import { FunctionComponent, useEffect, useState } from "react";
import { PurchaseData } from "../../@types/purchaseData";
import { format, getDaysInMonth, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CircularProgress } from "@mui/material";
interface DashboardChartsProps {
  type: "acumulative-year" | "years" | "acumulative-month" | "month";
  data: PurchaseData[];
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
export const DashboardCharts: FunctionComponent<DashboardChartsProps> = ({
  data,
  type,
  loading,
  setLoading
}) => {
  const [chartData, setChartData] = useState<LineChartUnit[]>([]);
  const actualDate = new Date();
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth();
  console.log("ChartIniticalData:", data);

  useEffect(() => {
    console.log("loading", loading);
    function loadingCharts() {
      if (!loading) {
        console.log("in if");
        
        const chartData = formatPurchasesDataToChart();
        setChartData(chartData);
      }
    }
    

    loadingCharts();
  }, [data, loading]);
  function ChartTitle() {
    let month = format(actualDate, "MMMM", { locale: ptBR });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    switch (type) {
      case "month":
        return (
          <HeaderTextWrapper>
            <HeaderText>Compra no mês</HeaderText>
            <HeaderTextHighlight>{month}</HeaderTextHighlight>
          </HeaderTextWrapper>
        );
        break;
      case "acumulative-month":
        return (
          <HeaderTextWrapper>
            <HeaderText>Compra acumuladas do mês: </HeaderText>
            <HeaderTextHighlight>{month}</HeaderTextHighlight>
          </HeaderTextWrapper>
        );
        break;
      case "acumulative-year":
        console.log("Não tratado ainda: ");
        return (
          <HeaderTextWrapper>
            <HeaderText>Compra acumuladas do ano: </HeaderText>
            <HeaderTextHighlight>{actualYear}</HeaderTextHighlight>
          </HeaderTextWrapper>
        );
        break;
      case "years":
        return (
          <HeaderTextWrapper>
            <HeaderText>Compra do ano: </HeaderText>
            <HeaderTextHighlight>{actualYear}</HeaderTextHighlight>
          </HeaderTextWrapper>
        );
      default:
        return "";
    }
  }
  function formatPurchasesDataToChart() {
      if(type === "month" ) {

      
        let monthAuxData: LineChartUnit[] = [];
        for (let i = 0; i <= getDaysInMonth(actualDate); i++) {
          monthAuxData.push({
            label: getDaysInMonth(actualDate).toString(),
            price: 0,
          });
        }

        const monthFilteredData = data.filter((item) => {
          let itemDate = new Date(item.date_of_purchase);
          return (
            itemDate.getFullYear() === actualYear &&
            itemDate.getMonth() === actualMonth
          );
        });

        monthFilteredData.map((item) => {
          let itemDate = parseISO(item.date_of_purchase).getDate();
          let dateIndex = monthAuxData.findIndex((item) => {
            return item.label === itemDate.toString();
          });
          monthAuxData = [
            ...monthAuxData.slice(0, dateIndex),
            {
              ...monthAuxData[dateIndex],
              price: (monthAuxData[dateIndex].price +=
                item.ration_price * item.quantity),
            },
            ...monthAuxData.slice(dateIndex + 1),
          ];
        });
        return monthAuxData;
      }
      else if(type === "acumulative-month" ) {

      
        let aMonthAuxData: LineChartUnit[] = [];
        const aMonthFilteredData = data.filter((item) => {
          let itemDate = new Date(item.date_of_purchase);
          return (
            itemDate.getFullYear() === actualYear &&
            itemDate.getMonth() === actualMonth
          );
        });
        for (let i = 1; i <= getDaysInMonth(actualMonth); i++) {
          let price = 0;
          let thisDayData = aMonthFilteredData.filter((item) => {
            let itemDate = parseISO(item.date_of_purchase).getDate();

            return itemDate === i;
          });
          //console.log(`Dia ${i} DayData`, thisDayData);
          thisDayData.forEach((item) => {
            price += item.ration_price * item.quantity;
          });
          if (i != 1) {
            price += aMonthAuxData[i - 2].price;
          }
          aMonthAuxData.push({
            label: `${i}`,
            price: Number(price.toFixed(2)),
          });
        }
        return aMonthAuxData;
      }
      else if(type === "acumulative-year" ) {

        console.log("Não tratado ainda");
        return [];
      }
      else if(type === "years" ) {
        
        let yearsAuxData:LineChartUnit[] = []
        yearsAuxData = LineChartDataYearTemplate;
        yearsAuxData.forEach((item, index)=>{
          yearsAuxData = [
            ...yearsAuxData.slice(0, index),
            {
              ...yearsAuxData[index],
              price: yearsAuxData[index].price = 0
            },
            ...yearsAuxData.slice(index + 1),
          ];
        });
        const yearFilteredData = data.filter((item) => {
          let itemDate = new Date(item.date_of_purchase);
          return itemDate.getFullYear() === actualYear;
        });
        
        yearFilteredData.map((item) => {
          let itemMonth = parseISO(item.date_of_purchase).getMonth();
          //console.log("Item:", item);
          //console.log(`${itemMonth}: Adicionando ${item.ration_price * item.quantity}`);
          console.log(`yearsCall - ${itemMonth}: Acumulado do mês => ${yearsAuxData[itemMonth].price + item.ration_price * item.quantity}`);
          yearsAuxData = [
            ...yearsAuxData.slice(0, itemMonth),
            {
              ...yearsAuxData[itemMonth],
              price: Number((yearsAuxData[itemMonth].price +=
                  item.ration_price * item.quantity).toFixed(2)),
            },
            ...yearsAuxData.slice(itemMonth + 1),
          ];
        });
        console.log("yearsAuxData: ", yearsAuxData);

        return yearsAuxData;
      }
      else{
        return [];
      }
    }

  return (
    <LineChartContainer>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <ChartTitle />
          <LineChart
            width={730}
            height={230}
            data={chartData}
            margin={{ top: 5, right: 30, left: 10, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={defaultTheme.gray_900}
            />
            <XAxis
              dataKey="label"
              height={type.includes("year") ? 50 : 30}
              tickMargin={type.includes("year") ? 20 : 10}
              style={{
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "flex-start",
              }}
              angle={type.includes("year") ? 45 : 0}
            />
            <YAxis
              tickSize={1}
              tickMargin={10}
              style={{ fontSize: "0.75rem" }}
            />
            <Tooltip />
            <Legend
              verticalAlign="top"
              height={36}
              margin={{ top: 0, bottom: 0 }}
              style={{}}
            />
            <Line
              strokeWidth={3}
              dot={{ strokeWidth: 1 }}
              dataKey="price"
              stroke={defaultTheme.green_300}
            />
          </LineChart>
        </>
      )}
    </LineChartContainer>
  );
};
