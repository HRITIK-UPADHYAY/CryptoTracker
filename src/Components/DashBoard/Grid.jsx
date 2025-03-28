import React, { useState } from 'react';
import './Style/grid.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';
import { Link } from 'react-router-dom';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Grid = ({coin, isPresent}) => {
  const [isWatchList, setWatchList] = useState(isPresent);

  function handleWatchList(event, id) {
    event.preventDefault(); 
    if(!localStorage.getItem('watchListCoins')) localStorage.setItem('watchListCoins', JSON.stringify([]));

    const hs = new Set(JSON.parse(localStorage.getItem('watchListCoins')));

    if(!isWatchList) hs.add(id);
    else {
      if(hs.has(id)) hs.delete(id);
    }

    localStorage.setItem('watchListCoins', JSON.stringify([...hs]));
    setWatchList(prevState => !prevState);
  }
    
  return (
    <Link to={`/coin/${coin.id}`} className='link-wrapper-grid'>
      <div className={`grid ${coin.price_change_percentage_24h > 0 ? 'grid-price-positive': 'grid-price-negative'}`} >
        <div className='upper'>
          <div className='left'>
            <img src={coin.image} />
            <div className="coin-name">
              <h4> {coin.symbol} </h4>
              <p> {coin.name} </p>
            </div>
          </div>
          <div className='right' onClick={(event) => handleWatchList(event, coin.id)}> 
            { isWatchList ? <StarRoundedIcon className={coin.price_change_percentage_24h > 0 ? 'star-logo-green': 'star-logo-red'}/> 
                          : <StarPurple500RoundedIcon className={coin.price_change_percentage_24h > 0 ? 'star-logo-green': 'star-logo-red'}/>   
            } 
          </div>
        </div>
        <div className='middle'>
          <p className={coin.price_change_percentage_24h > 0 ? 'price-positive': 'price-negative'}> {coin.price_change_percentage_24h.toFixed(2)}% </p>
          {coin.price_change_percentage_24h > 0 ? <TrendingUpRoundedIcon  className='up trend-icon'/> :<TrendingDownRoundedIcon className='down trend-icon'/> }
        </div>
        <div className='lower'>
          <p className={coin.price_change_percentage_24h > 0 ? 'coin-price-green' : 'coin-price-red'}> ${coin.current_price.toLocaleString()} </p>
          <div className='market-cap'>
            <p> Total Volume: {coin.total_volume.toLocaleString()} </p>
            <p> Market Cap: {coin.market_cap.toLocaleString()} </p>
          </div>
        </div>
      </div>
    </Link>
  ) 
}

export default Grid

// { isWatchList ? <StarRoundedIcon className={coin.price_change_percentage_24h > 0 ? 'star-logo-green': 'star-logo-red'}/> 
//                           : <StarPurple500RoundedIcon className={coin.price_change_percentage_24h > 0 ? 'star-logo-green': 'star-logo-red'}/>   
//             } 
