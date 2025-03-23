import React, { useEffect, useState } from 'react'
import { get100Coins } from '../../Functions/get100Coins';
import { MenuItem, Select } from '@mui/material';
import './Style/selectCoin.css';

const SelectCoins = ({crypto1, crypto2, handleCoinsChange}) => {
    const [getAllCoins, setGetAllCoins] = useState([]);

   const style = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset" : {
                borderColor: "#3a80e9",
            },
        },
   }

    useEffect(() => {
        getData()
    }, []);

   async function getData() {
    const myCoins = await get100Coins();
    setGetAllCoins(myCoins);
   }


  return (
    <div className='select-coins'>
        <p> Crypto 1 </p>
        <Select
          sx={style}
          value={crypto1}
          label="crypto 1"
          onChange={(event) => handleCoinsChange(event, false)}
        >
        { 
           getAllCoins && getAllCoins.filter(item => item.id != crypto2).map((coin, index) => <MenuItem key={index} value={coin.id}> {coin.name} </MenuItem> )
        }
        </Select>

        <p> Crypto 2 </p>
        <Select
          sx={style}
          value={crypto2}
          label="crypto 2"
          onChange={(event) =>  handleCoinsChange(event, true)}
        >
        { 
            getAllCoins && getAllCoins.filter(item => item.id != crypto1).map((coin, index) => <MenuItem key={index} value={coin.id}> {coin.name} </MenuItem> )
        }
        </Select>
    </div>
  )
}

export default SelectCoins
