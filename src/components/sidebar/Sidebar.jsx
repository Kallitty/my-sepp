import React from 'react'
import {
  BiBookAlt,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiFolder,
  BiTask,
  BiSettings,
} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <BiBookAlt />
        <h2>Welcome to Sepp</h2>
      </div>
      <div className='menu--list'>
        <a href='#' className='item'>
          <BiHome />
          Dashboard
        </a>
        <a href='#' className='item'>
          <BiStats />
          Results
        </a>
        <a href='#' className='item'>
          <BiFolder />
          Report card
        </a>
        <a href='#' className='item'>
          <BiStats />
          Stats
        </a>
        <a href='#' className='item'>
          <BiMessage />
          Message
        </a>
        <a href='#' className='item'>
          <BiTask />
          Help
        </a>
        <a href='#' className='item'>
          <BiSettings />
          Settings
        </a>
      </div>
    </div>
  )
}

export default Sidebar
