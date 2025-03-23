import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabComponent from '../Components/DashBoard/TabComponent'
import PaginationComponent from '../Components/DashBoard/Pagination'
import Search from '../Components/DashBoard/Search';
import Loader from '../Components/DashBoard/Loader'
import BackToTop from '../Components/Common/BackToTop'
import { get100Coins } from '../Functions/get100Coins';

const DashBoard = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = React.useState(1);
    const [pagenatedCoins, setPagenatedCoins] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [errInfo, setErrInfo] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState("");

    useEffect(() => {
      if(coins.length != 0) setErrInfo(false);
    }, [coins]);

    const handlePageChange = (event, value) => {
      setPage(value);
      var previousIndex = (value - 1) * 10;
      setPagenatedCoins(coins.slice(previousIndex, previousIndex + 10));
      setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
      const myCoins = await get100Coins();
      if(Array.isArray(myCoins)) {
        setCoins(myCoins);
        setPagenatedCoins(myCoins.slice(0, 10));
        setIsLoading(false);
      }
      else {
        setErr(myCoins);
        setErrInfo(true);
        setIsLoading(false);
      }
    }

  return (
    <div>
      <Header />
      <BackToTop /> 
      <Search searchText={searchText} setSearchText={setSearchText} />

      {
        errInfo ? <div className='error'> 
              <h3> There is some {err} While making the API Hit </h3>
              <p> Please Try After Sometime or Refresh The Page. </p>
             </div>
          : isLoading ? <Loader /> : <div>
                                        <TabComponent coins={searchText ? coins: pagenatedCoins} searchText={searchText} setSearchText={setSearchText} />
                                        {!searchText && <PaginationComponent page={page} handleChange={handlePageChange}/> }
                                      </div> 
      }

    </div>
  )
}

export default DashBoard