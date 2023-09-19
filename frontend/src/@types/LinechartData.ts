export interface LineChartData {
  data: LineChartUnit[];
}
export interface LineChartUnit {
  label: string;
  price: number;
}

export const LineChartDataYearTemplate: LineChartUnit[] = [
    {
      label: "Janeiro",
      price: 0,
    },
    {
      label: "Fevereiro",
      price: 0,
    },
    {
      label: "Março",
      price: 0,
    },
    {
      label: "Abril",
      price: 0,
    },
    {
      label: "Maio",
      price: 0,
    },
    {
      label: "Junho",
      price: 0,
    },
    {
      label: "Julho",
      price: 0,
    },
    {
      label: "Agosto",
      price: 0,
    },
    {
      label: "Setembro",
      price: 0,
    },
    {
      label: "Outubro",
      price: 0,
    },
    {
      label: "Novembro",
      price: 0,
    },
    {
      label: "Desembro",
      price: 0,
    },
  ]

export const monthToMonthName={
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11:"Desembro",

}