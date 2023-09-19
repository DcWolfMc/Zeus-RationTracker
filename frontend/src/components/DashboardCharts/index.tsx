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
  LineChartDataYearTemplate,
  LineChartUnit,
} from "../../@types/LinechartData";
import { FunctionComponent, useEffect, useState } from "react";
import { PurchaseData } from "../../@types/purchaseData";
import { format, getDaysInMonth, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
interface DashboardChartsProps {
  type: "acumulative-year" | "years" | "acumulative-month" | "month";
  data: PurchaseData[];
}
export const DashboardCharts: FunctionComponent<DashboardChartsProps> = ({
  data,
  type,
}) => {
  const [chartData, setChartData] = useState<LineChartUnit[]>([]);
  const actualDate = new Date();
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth();
  console.log("ChartIniticalData:", data);
  useEffect(() => {
    setChartData(formatPurchasesDataToChart());
  }, [data,type]);
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
    switch (type) {
      case "month":
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

        break;
      case "acumulative-month":
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
        break;
      case "acumulative-year":
        console.log("Não tratado ainda");
        return [];
        break;
      case "years":
        let yearsAuxData = LineChartDataYearTemplate;
        const yearFilteredData = data.filter((item) => {
          let itemDate = new Date(item.date_of_purchase);
          return itemDate.getFullYear() === actualYear;
        });

        yearFilteredData.map((item) => {
          let itemMonth = parseISO(item.date_of_purchase).getMonth();
          console.log("Item:", item);

          console.log(
            `${itemMonth}: Adicionando ${item.ration_price * item.quantity}`
          );
          console.log(
            `${itemMonth}: Acumulado do mês => ${
              yearsAuxData[itemMonth].price + item.ration_price * item.quantity
            }`
          );
          yearsAuxData = [
            ...yearsAuxData.slice(0, itemMonth),
            {
              ...yearsAuxData[itemMonth],
              price: (yearsAuxData[itemMonth].price +=
                Number((item.ration_price * item.quantity).toFixed(2))),
            },
            ...yearsAuxData.slice(itemMonth + 1),
          ];
        });
        console.log("yearsAuxData: ", yearsAuxData);

        return yearsAuxData;
      default:
        return [];
    }
  }

  return (
    <LineChartContainer>
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
        <YAxis tickSize={1} tickMargin={10} style={{ fontSize: "0.75rem" }} />
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
    </LineChartContainer>
  );
};
