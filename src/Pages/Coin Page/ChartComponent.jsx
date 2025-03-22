import React from 'react'
import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJs, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend 
  } from 'chart.js';
  
  // **Register required components**
  ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  
const ChartComponent = ({chartData, priceType, multiAxis}) => {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true: false,
            },
        },
        responsive: true,
        interaction: {
            node: "index",
            intersect: false,
        } ,
    };

  return <Line data={chartData} options={options} />
}

export default ChartComponent
