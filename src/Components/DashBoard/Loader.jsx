import { CircularProgress } from '@mui/material'
import React from 'react'
import './Style/loader.css'

const Loader = () => {

  return (
    <div className='loader'>
      <CircularProgress />
    </div>
  )
}

export default Loader