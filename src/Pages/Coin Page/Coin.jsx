import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Common/Header';
import Loader from '../../Components/DashBoard/Loader';
import { coinobject } from '../../Functions/convertCoinData';
import List from '../../Components/DashBoard/List'
import CoinInfo from './CoinInfo';
import './Style/coin.css'
import { getCoinData } from '../../Functions/getCoinData';
import { getCoinPrices } from '../../Functions/getCoinPrices';
import ChartComponent from './ChartComponent';
import { convertDate } from '../../Functions/convertDate';
import SelectDays from './SelectDays';
import { settingChartData } from '../../Functions/setingtChartData';


const Coin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState({});
    const [chartData, setChartData] = useState({});
    const {id} = useParams(); 
    const [days, setDays] = useState(30);

    useEffect(() => {
        if(id) {
          console.log("id is there => ", id);
          getData();
        }
    }, [id]);

    async function getData() {
      const data = await getCoinData(id);
      if(data) {
        coinobject(setCoinData, data);
        const prices = await getCoinPrices(id, days);
        if(prices) {
          setChartData({
            labels: prices.map(price => convertDate(price[0])),
            datasets: [
              {
                data: prices.map(price => price[1]),
                borderColor: "#3a80e9",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                backgroundColor: "rgba(58, 128, 233, 0.1)",
                pointRadius: 0,
              },
            ]
          });

          setIsLoading(false);
        }
      }
    }

    const handleDaysChange = async (event) => {
      setIsLoading(true);
      setDays(event.target.value);
      const prices = await getCoinPrices(id, event.target.value);
      if(prices) {
        settingChartData(setChartData, prices)
        setIsLoading(false);
      }
    };


  return (
    <div>
      <Header />

      {isLoading ? <Loader />
        : 
        <div className='coin-page'>
          <div className='coin-data'>
            <List coin={coinData} />
          </div>
          <div className="chart-component">
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <ChartComponent chartData={chartData} />
          </div>
          <CoinInfo  heading={coinData.name} description={coinData.desc} />
        </div> 
      }
    </div>
  )
}

export default Coin;
