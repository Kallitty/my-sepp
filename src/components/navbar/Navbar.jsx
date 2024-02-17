import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/cutoutworld.png'
// import { useState } from 'react'

const Menu = () => (
  <>
    <p>
      <a href='#home'> Home </a>
    </p>
    <p>
      <a href='#wsepp'> About SEPP </a>
    </p>
    <p>
      <a href='#library'> Library</a>
    </p>
    <p>
      <a href='#contactus'> Contact Us </a>
    </p>
    <p>
      <a href='#donations'> Donations </a>
    </p>
    <p>
      <a href='#takeexam'> Take Exam </a>
    </p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='sepp__navbar'>
      <div className='sepp__navbar-links'>
        <div className='sepp__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='sepp__navbar-links_container'>
          <Menu />
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

        {toggleMenu && (
          <div className='sepp__navbar-menu_container scale-up-center'>
            <div className='sepp__navbar-menu_container-links'>
              <Menu />
              <div className='sepp__navbar-menu_container-links-sign'>
                <p>Login</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
