import React, { useEffect, useState } from 'react'
import './Style/tabComponent.css'
import Grid from './Grid';
import List from './List';

const TabComponent = ({coins, searchText, setSearchText}) => {
  const [active, setActive] = useState(true);
  const [watchListSet, setWatchListSet] = useState(() => new Set(JSON.parse(localStorage.getItem('watchListCoins')) || []));

  useEffect(() => {
    handleGridClick("grid-view");    
  }, []);


  function handleGridClick(view) {
    const Container = document.getElementById(view);
    if(view === 'grid-view') {
        document.getElementById("list-view").style.display = 'none';
        Container.style.display = 'flex';
        setActive(true);
    }
    else {
        document.getElementById("grid-view").style.display = 'none';
        Container.style.display = 'flex';
        setActive(false);
    }
      
  }

  coins = coins.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase()) || coin.symbol.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div className='tabComponent'>
      <div className="tabs">
        <p className={active ? 'active': 'inactive'}  onClick={() => handleGridClick("grid-view")}> Grid </p>
        <p className={active ? 'inactive': 'active'} onClick={() => handleGridClick("list-view")}> List </p>
      </div>


      {
        coins.length == 0 && <div className='not-found'> 
                                <h3> No Item Found </h3>
                                <button onClick={() => setSearchText("")}> Clear Search </button>
                              </div>
      }

      <div id="grid-view">
        {coins.map((coin, i) => <Grid key={i} coin={coin} isPresent={watchListSet.has(coin.id)} /> )}
      </div>

      <div id="list-view">
        {coins.map((coin, i) => <List key={i} coin={coin} isPresent={watchListSet.has(coin.id)} />)}
      </div>
    </div>
  )
}

export default TabComponent
