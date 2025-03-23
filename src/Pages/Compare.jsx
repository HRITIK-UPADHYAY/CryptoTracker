import React, {useEffect, useState} from 'react'
import Header from '../Components/Common/Header'
import SelectCoins from '../Components/Common/SelectCoins'
import SelectDays from './Coin Page/SelectDays';
import './Style/compare.css'
import {coinobject} from '../Functions/convertCoinData';
import {getCoinPrices} from '../Functions/getCoinPrices';
import {getCoinData} from '../Functions/getCoinData';
import Loader from '../Components/DashBoard/Loader';
import List from '../Components/DashBoard/List';
import ChartComponent from './Coin Page/ChartComponent';
import CoinInfo from './Coin Page/CoinInfo';
import { settingChartData } from '../Functions/setingtChartData';
import PriceToggle from './Coin Page/PriceToggle';

const Compare = () => {
  const [crypto1, setCrypto1] = useState('bitcoin');
  const [crypto2, setCrypto2] = useState('ethereum');
  const [crypto1Data, setCrypto1Data] = useState([]);
  const [crypto2Data, setCrypto2Data] = useState([]);
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    getData();
  }, []); 

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);

    if(data1) coinobject(setCrypto1Data, data1);
    if(data2) coinobject(setCrypto2Data, data2);

    if(data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, "prices");
      const prices2 = await getCoinPrices(crypto2, days, "prices");

      if(prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
        console.log("Bothe Prices Feteched -> ", prices1, prices2);
        setIsLoading(false);
      }
    }

  }

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, "prices");
    const prices2 = await getCoinPrices(crypto2, event.target.value, "prices");
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
    console.log(event.target.value);
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false); 
  }

  const handleCoinsChange = async (event, isCoin2) => {
    setIsLoading(true);
    if(isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      if(data) {
        coinobject(setCrypto2Data, data);
        const prices = await getCoinPrices(event.target.value, days, "prices");
        if(prices) {
          settingChartData(setChartData, prices, prices2);
          setIsLoading(false);
        }
      }
    }
    else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      if(data) {
        coinobject(setCrypto1Data, data);
        const prices = await getCoinPrices(event.target.value, days, "prices");
        if(prices) {
          settingChartData(setChartData, prices, prices2);
          setIsLoading(false);
        }
      }
    }
  }
    
  return (
    <div className='compare'>
      <Header />
      {
        isLoading ? <Loader /> 
        :
        <div className='compare-container'>
          <div className='select-menu'>
            <SelectCoins crypto1={crypto1} crypto2={crypto2} handleCoinsChange={handleCoinsChange}/>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
          </div>
          
          <div className='coin-container'>
            <List coin={crypto2Data} />
          </div>

          <div className='coin-container'>
            <List coin={crypto2Data} />
          </div>
        
          <div className='coin-compare-chart'> 
            <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <ChartComponent chartData={chartData} priceType={priceType} multiAxis={true}/> 
          </div>

          <div className='coin-info-desc'>
            <CoinInfo heading={crypto1Data.name} description={crypto1Data.desc} />
            <CoinInfo heading={crypto2Data.name} description={crypto2Data.desc} />  {/* Add CoinInfo component here */}
          </div>  
        </div>
      }
      

    </div>
  )
}

export default Compare
