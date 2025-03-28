import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Style/header.css'
import AnchorTemporaryDrawer from './MIUI components/headerDrawer'
import Button from './Button'
import Switch from './MIUI components/Switch'

const Header = () => {

  useEffect(() => {
    sessionStorage.setItem("themeSwitcher", JSON.stringify(true));
  }, [])

  return (
    <nav className='navbar'>
      <div className='logo'> 
        <Link to='/'> <h2> CryptoTracker <span style={{color: "var(--blue)"}}>.</span></h2></Link>
      </div>
      <div className='links'>
        <Switch />
        <Link to="/"> Home </Link>
        <Link to="/compare"> Compare </Link>
        <Link to="/watchList"> Watchlist </Link>
        <Link to="/dashboard"> <Button text={"Dashboard"} /> </Link>
      </div>
      <div className='mobile-drawer'>
        <AnchorTemporaryDrawer />
      </div>
    </nav>
  )
}

export default Header
