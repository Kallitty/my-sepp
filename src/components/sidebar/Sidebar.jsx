import React from 'react'
import {
  BiBookAlt,
  BiHome,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiFolder,
  BiTask,
} from 'react-icons/bi'
import { DiAptana } from 'react-icons/di'

const Sidebar = () => {
  return (
    <div className='sepp__sidebar-left__menu'>
      <div className='sepp__sidebar-left__menu {'>
        <BiBookAlt className='sepp__sidebar-left__icons' />
        <h2>My SEPP</h2>
      </div>
      <div className='menu--list'>
        <a href='#' className='sepp__sidebar-left__anchor'>
          <BiHome className='sepp__sidebar-left__icons' />
          Dashboard
        </a>
        <a href='#' className='sepp__sidebar-left__anchor'>
          <BiSolidReport className='sepp__sidebar-left__icons' />
          Results
        </a>
        <a href='#' className='sepp__sidebar-left__anchor'>
          <BiFolder className='sepp__sidebar-left__icons' />
          Report card
        </a>
        <a href='#' className='sepp__sidebar-left__anchor'>
          <BiStats className='sepp__sidebar-left__icons' />
          Stats
        </a>
        <a href='#' className='sepp__sidebar-left__anchor'>
          <BiMessage className='sepp__sidebar-left__icons' />
          Message
        </a>
        <a href='#' className='sepp__sidebar-left__anchor'>
          <BiTask className='sepp__sidebar-left__icons' />
          Help
        </a>
        <a href='#' className='sepp__sidebar-left__anchor'>
          <DiAptana className='sepp__sidebar-left__icons' />
          Settings
        </a>
      </div>
    </div>
  )
}

export default Sidebar
