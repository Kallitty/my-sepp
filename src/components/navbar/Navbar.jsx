import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/cutoutworld.png'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

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
      <div className='sepp__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar
