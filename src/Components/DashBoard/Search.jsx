import React, {useState} from 'react'
import './Style/search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({searchText, setSearchText}) => {
  return (
    <div className='search'>
        <div className='search-icon-div'> <SearchRoundedIcon className='search-icon'/> </div>
        <input type='text' placeholder='Search' value={searchText} className='search-box' onChange={(e) => setSearchText(e.target.value)}/>
      </div>
  )
}

export default Search
