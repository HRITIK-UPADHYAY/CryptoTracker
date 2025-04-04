import React, { useState } from 'react'
import './Style/list.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from 'react-router-dom';

const List = ({coin, isPresent}) => {
    const [isWatchList, setWatchList] = useState(isPresent);

    function handleWatchList(event, id) {
        event.preventDefault(); 
        if(!localStorage.getItem('watchListCoins')) localStorage.setItem('watchListCoins', JSON.stringify([]));
    
        if(!isWatchList) {
            const hs = new Set(JSON.parse(localStorage.getItem('watchListCoins')));
            hs.add(id);
            localStorage.setItem('watchListCoins', JSON.stringify([...hs]));
            setWatchList(!isWatchList)
        }
        else {
            let hs = new Set(JSON.parse(localStorage.getItem('watchListCoins')));
            if(hs.has(id)) hs.delete(id);
            localStorage.setItem('watchListCoins', JSON.stringify([...hs]));
            setWatchList(!isWatchList);
        }
    }

  return (
     <Link to={`/coin/${coin.id}`} className='link-wrapper-list'>
        <div className='list'>
            <div className="coin-info">
                <img src={coin.image} />
                <div className='coin-name'>
                    <h4> {coin.symbol} </h4>
                    <p> {coin.name} </p>
                </div>
            </div>

            <div className='coin-price-change'>
                <p className={`price ${coin.price_change_percentage_24h > 0 ? 'price-positive': 'price-negative'}`}> {coin.price_change_percentage_24h.toFixed(2)}% </p>
            </div>
            
            <div className="coin-price"> 
                {coin.price_change_percentage_24h > 0 ? <TrendingUpRoundedIcon  className='up trend-icon'/> :<TrendingDownRoundedIcon className='down trend-icon'/> }
                <p className={coin.price_change_percentage_24h > 0 ? 'coin-price-green' : 'coin-price-red'}> ${coin.current_price.toLocaleString()} </p>
            </div>

            <p className="volume"> {coin.total_volume.toLocaleString()} </p>
            <p className="marketCap"> {coin.market_cap.toLocaleString()} </p>
            
            <div className="star-logo" onClick={(event) => handleWatchList(event, coin.id)}>
                { isWatchList ? <StarRoundedIcon className={coin.price_change_percentage_24h > 0 ? 'star-logo-green': 'star-logo-red'}/> 
                              : <StarPurple500RoundedIcon className={coin.price_change_percentage_24h > 0 ? 'star-logo-green': 'star-logo-red'}/> 
                }
            </div>
        </div>
     </Link>
  )
}

export default List
