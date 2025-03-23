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
        },
        scales: {
            crypto1: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        if(priceType == "prices") return '$' + value.toLocaleString();
                        return '$' + value;
                    },
                },
            },
            crypto2: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        if(priceType == "prices") return '$' + value.toLocaleString();
                        return '$' + value;
                    },
                },
            },
        },
    }

    return <Line data={chartData} options={options} />
};

export default ChartComponent
