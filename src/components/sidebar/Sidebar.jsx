import React from 'react'
import {
  BiBookAlt,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiTask,
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
      </div>
    </div>
  )
}

export default Sidebar
