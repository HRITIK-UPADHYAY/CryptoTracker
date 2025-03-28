import React, { useEffect, useState } from 'react';
import Header from '../Components/Common/Header'
import './Style/watchlist.css'
import { get100Coins } from '../Functions/get100Coins';
import Button from '../Components/Common/Button';
import TabComponent from '../Components/DashBoard/TabComponent';
import Search from '../Components/DashBoard/Search' 
import Loader from '../Components/DashBoard/Loader';
import Error from './Error'

const WatchList = () => {     
    const [watchListSet, setWatchListSet] = useState(new Set(JSON.parse(localStorage.getItem('watchListCoins')) || []));
    const [coinsArray, setCoinsArray] = useState([]); 
    const [filteredWatchListCoins, setFilteredWatchListCoins] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [errInfo, setErrInfo] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
      async function getData() {
        const data = await get100Coins();
        if(Array.isArray(data)) setCoinsArray(data); 
        else {
          setErrInfo(true);
          setErr(data);
        }
        
        setIsLoading(false);
      }getData();
    }, []);   

    useEffect(() => {
      setFilteredWatchListCoins((coinsArray || []).filter(coin => watchListSet.has(coin.id)));
    }, [coinsArray]);


  return (
    <div>
      <Header />
      <Search searchText={searchText} setSearchText={setSearchText}/>
      {
        isLoading ? <Loader />
                  : errInfo ? <Error err={err} />
                            : watchListSet.size == 0 ? <div className='watchList-empty   '>
                                                          <h1> Not Items Is Present In WatchList </h1>
                                                          <p> Please Add First From DashBoard </p>
                                                          <Button text={"DashBoard"} outlined={false}/>
                                                        </div>
                                                      : <div> 
                                                          <TabComponent coins={filteredWatchListCoins} searchText={searchText}/> 
                                                        </div>
      }
    </div>
  )
}

export default WatchList
