import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Common/Header';
import Loader from '../../Components/DashBoard/Loader';
import { coinobject } from '../../Functions/convertCoinData';
import List from '../../Components/DashBoard/List'
import CoinInfo from './CoinInfo';
import './Style/coin.css'

const Coin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState({});
    const {id} = useParams(); 

    useEffect(() => {
        if(id) {
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => {
              console.log(res.data)
                setIsLoading(false);
                coinobject(setCoinData, res.data)
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
        }
    }, [id]);

  return (
    <div>
      <Header />
      {isLoading ? <Loader />
        : 
        <div className='coin-page'>
          <div className='coin-data'>
            <List coin={coinData} />
          </div>
           
            <CoinInfo  heading={coinData.name} description={coinData.desc} />
        </div> 
      }
    </div>
  )
}

export default Coin
