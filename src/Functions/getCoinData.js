import axios from "axios";

export const getCoinData = (id) => {
    const data = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(res => res.data)
    .catch(err => {
        console.log(err);
    });
    return data;
}