import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices, prices2) => {
  if(prices2) {
    setChartData({
      labels: prices.map(price => convertDate(price[0])),
      datasets: [
        {
          label: "Crypto 1",
          data: prices.map(price => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58, 128, 233, 0.1)",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto 2",
          data: prices2.map(price => price[1]),
          borderColor: "#61c96f",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ]
    });
  }
  else {
    setChartData({
        labels: prices.map(price => convertDate(price[0])),
        datasets: [
          {
            data: prices.map(price => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            pointRadius: 0,
            yAxisID: "crypto1",
          },
        ]
    });
  }
}