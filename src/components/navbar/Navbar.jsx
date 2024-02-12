import React from 'react'
import './navbar.css'
// import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/cutoutworld.png'

const Navbar = () => {
  return (
    <div className='sepp__navbar'>
      <div className='sepp__navbar-links'>
        <div className='sepp__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='sepp__navbar-links_container'>
          <p href='#home'>Home</p>
          <p href='#home'>About SEPP</p>
          <p href='#home'>Donate</p>
          <p href='#home'>News</p>
          <p href='#home'>Library</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
