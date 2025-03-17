import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style/header.css'
import AnchorTemporaryDrawer from './MIUI components/headerDrawer'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='logo'> 
        <h2> CryptoTracker <span style={{color: "var(--blue)"}}>.</span></h2>
      </div>
      <div className='links'>
        <p> TGL </p>
        <NavLink> Home </NavLink>
        <NavLink> Compare </NavLink>
        <NavLink> Watchlist </NavLink>
        <button className='dashboard'> Dashboard </button>
      </div>
      <div className='mobile-drawer'>
        <AnchorTemporaryDrawer />
      </div>
    </nav>
  )
}

export default Header
