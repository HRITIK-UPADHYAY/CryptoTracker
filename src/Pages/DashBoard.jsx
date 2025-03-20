import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import axios from 'axios'
import TabComponent from '../Components/DashBoard/TabComponent'
import PaginationComponent from '../Components/DashBoard/Pagination'
import Search from '../Components/DashBoard/Search';

const DashBoard = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = React.useState(1);
    const [pagenatedCoins, setPagenatedCoins] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [errInfo, setErrInfo] = useState(true);

    useEffect(() => {
      if(coins.length != 0) setErrInfo(false);
    }, [coins]);

    const handlePageChange = (event, value) => {
      setPage(value);
      var previousIndex = (value - 1) * 10;
      setPagenatedCoins(coins.slice(previousIndex, previousIndex + 10))
    };

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false')
        .then(res => {
          setCoins(res.data);
          setPagenatedCoins(res.data.slice(0, 10))
        })
        .catch(err => console.log(err));
    });

  return (
    <div>
      <Header />
      <Search searchText={searchText} setSearchText={setSearchText} />

      {
        errInfo ? <div className='error'> 
                    <h3> There is some error While making the API Hit </h3>
                    <p> Please Try After Sometime or Refresh The Page. </p>
                  </div>
                :
                <div>
                  <TabComponent coins={searchText ? coins: pagenatedCoins} searchText={searchText} setSearchText={setSearchText} />
                  {!searchText && <PaginationComponent page={page} handleChange={handlePageChange}/> }
                </div> 
      }
    </div>
  )
}

export default DashBoard