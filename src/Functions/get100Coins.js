import axios from 'axios';

export const get100Coins = () => {
    const myCoins = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false')
        .then(res => res.data)
        .catch(err => err.message);

    return myCoins;
}