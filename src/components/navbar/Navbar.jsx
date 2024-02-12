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
          <p href='#About'>About SEPP</p>
          <p href='#Library'>Library</p>
          <p href='#Contactus'>Contact Us</p>
          <p href='#Donations'>Donations</p>
        </div>
      </div>
      <div className='sepp__navbar-sign'>
        <p>Login</p>
        <button type='button'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
