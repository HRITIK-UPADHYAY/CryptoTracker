import React from 'react'
import { Link } from 'react-router-dom'
import './Style/header.css'
import AnchorTemporaryDrawer from './MIUI components/headerDrawer'
import Button from './Button'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='logo'> 
        <Link to='/'> <h2> CryptoTracker <span style={{color: "var(--blue)"}}>.</span></h2></Link>
      </div>
      <div className='links'>
        <p> TGL </p>
        <Link to="/"> Home </Link>
        <Link> Compare </Link>
        <Link> Watchlist </Link>
        <Link to="/dashboard"> <Button text={"Dashboard"} /> </Link>
      </div>
      <div className='mobile-drawer'>
        <AnchorTemporaryDrawer />
      </div>
    </nav>
  )
}

export default Header
