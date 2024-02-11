import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='sepp__navbar'>
      <div className='sepp__navbar-links'>
        <div className='sepp__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
