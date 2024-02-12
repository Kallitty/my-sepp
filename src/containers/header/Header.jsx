import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='sepp__header section__padding' id='home'>
      <div className='sepp__header-content'>
        <h1 className='gradient__text'>
          Best Guide to Succeeding in Professional and Scholarship Exams...
        </h1>
        <div className='sepp__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header
