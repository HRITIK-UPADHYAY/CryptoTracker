import React from 'react';
import './Style/grid.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';

const Grid = ({coin}) => {
    
  return (
    <div className={`grid ${coin.price_change_percentage_24h > 0 ? 'grid-price-positive': 'grid-price-negative'}`} >
      <div className='upper'>
        <div className='left'>
            <img src={coin.image} />
            <div className="coin-name">
                <h4> {coin.symbol} </h4>
                <p> {coin.name} </p>
            </div>
        </div>
        <div className='right'> 
            <StarPurple500RoundedIcon className={coin.price_change_percentage_24h > 0 ? 'star-logo-green': 'star-logo-red'}/>
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
  )
}

export default Grid
