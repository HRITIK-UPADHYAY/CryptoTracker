import React, { useEffect, useState } from 'react'
import { get100Coins } from '../../Functions/get100Coins';
import { MenuItem, Select } from '@mui/material';
import './Style/selectCoin.css';
import Loader from '../DashBoard/Loader';

const SelectCoins = ({crypto1, crypto2, handleCoinsChange}) => {
    const [getAllCoins, setGetAllCoins] = useState([]);
    const [errInfo, setErrInfo] = useState(false);
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(true);

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
    if(Array.isArray(myCoins)) setGetAllCoins(myCoins);
    else {
        setErr(myCoins);
        setErrInfo(true);
    }
    
    setIsLoading(false);
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
            isLoading ? <Loader /> 
                      : errInfo ? <Error err={err} />
                                : getAllCoins && getAllCoins.filter(item => item.id != crypto2).map((coin, index) => <MenuItem key={index} value={coin.id}> {coin.name} </MenuItem> )
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
           isLoading ? <Loader /> 
                    : errInfo ? <Error err={err} />
                              : getAllCoins && getAllCoins.filter(item => item.id != crypto1).map((coin, index) => <MenuItem key={index} value={coin.id}> {coin.name} </MenuItem> )
        }
        </Select>
    </div>
  )
}

export default SelectCoins
