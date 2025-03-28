import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { coinobject } from '../../Functions/convertCoinData';
import './Style/coin.css'
import { getCoinData } from '../../Functions/getCoinData';
import { getCoinPrices } from '../../Functions/getCoinPrices';
import { settingChartData } from '../../Functions/setingtChartData';
import Error   from '../Error';
import Header from '../../Components/Common/Header';
import List from '../../Components/DashBoard/List';
import CoinInfo from '../Coin Page/CoinInfo';
import SelectDays from '../Coin Page/SelectDays';
import PriceToggle from '../Coin Page/PriceToggle';
import ChartComponent from '../Coin Page/ChartComponent'
import Loader from '../../Components/DashBoard/Loader';


const Coin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState({});
    const [chartData, setChartData] = useState({});
    const {id} = useParams(); 
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState('prices');
    const [watchListSet, setWatchListSet] = useState(() => new Set(JSON.parse(localStorage.getItem('watchListCoins'))) || []);
    const [errInfo, setErrInfo] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        if(id) getData();
    }, [id]);

    async function getData() {
      const data = await getCoinData(id);
      if(typeof data === "object" && data !== null) {
        coinobject(setCoinData, data);

        const prices = await getCoinPrices(id, days, priceType);
        if(Array.isArray(prices)) settingChartData(setChartData, prices);
        else {
          setErr(prices);
          setErrInfo(true);
        }
      }
      else {
        setErr(data);
        setErrInfo(true);
      }

      setIsLoading(false);
    }

    const handleDaysChange = async (event) => {
      setIsLoading(true);
      setDays(event.target.value);

      const prices = await getCoinPrices(id, event.target.value, priceType);
      if(Array.isArray(prices)) settingChartData(setChartData, prices);
      else {
        setErr(prices);
        setErrInfo(true);
      }

      setIsLoading(false);
    };

    const handlePriceTypeChange = async (event, newType) => {
      setIsLoading(true);
      setPriceType(newType);

      const prices = await getCoinPrices(id, days, newType);
      if(Array.isArray(prices)) settingChartData(setChartData, prices)
      else {
        setErr(prices);
        setErrInfo(true);
      }

      setIsLoading(false);      
    };

  return (
    <div>
      <Header />

      {
        isLoading ? <Loader />
                  : errInfo ? <Error err={err}/>
                            : <div className='coin-page'>
                                <div className='coin-data'>
                                  <List coin={coinData} isPresent={watchListSet.has(coinData.id)}/>
                                </div>
                                <div className="chart-component">
                                  <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                                  <PriceToggle priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                                  <ChartComponent chartData={chartData} priceType={priceType} />
                                </div>
                                <div className='header-desc'>
                                  <CoinInfo  heading={coinData.name} description={coinData.desc} />
                                </div>
                              </div> 
      }
    </div>  
  )
}

export default Coin;
