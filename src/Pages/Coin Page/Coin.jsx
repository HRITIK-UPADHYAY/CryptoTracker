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
import SelectDays from './SelectDays';
import { settingChartData } from '../../Functions/setingtChartData';
import PriceToggle from './PriceToggle';


const Coin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState({});
    const [chartData, setChartData] = useState({});
    const {id} = useParams(); 
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState('left');

    useEffect(() => {
        if(id) {
          getData();
        }
    }, [id]);

    async function getData() {
      const data = await getCoinData(id);
      if(data) {
        coinobject(setCoinData, data);
        const prices = await getCoinPrices(id, days, priceType);
        if(prices) {
          settingChartData(setChartData, prices);
          setIsLoading(false);
        }
      }
    }

    const handleDaysChange = async (event) => {
      setIsLoading(true);
      setDays(event.target.value);
      const prices = await getCoinPrices(id, event.target.value, priceType);
      if(prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    };

    const handlePriceTypeChange = async (event, newType) => {
      setIsLoading(true);
      setPriceType(newType);
      const prices = await getCoinPrices(id, days, newType);
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
            <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <ChartComponent chartData={chartData} priceType={priceType} />
          </div>
          <CoinInfo  heading={coinData.name} description={coinData.desc} />
        </div> 
      }
    </div>
  )
}

export default Coin;
