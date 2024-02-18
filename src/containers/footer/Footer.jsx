import React from 'react'
import './footer.css'
import seppFooter from '../../assets/cutoutsepp.png'

const Footer = () => {
  return (
    <div className='sepp__footer section__padding'>
      <div className='sepp__footer-heading'>
        <h1 className='gradient text'>
          Are you ready to embrace the future ahead of the curve?
        </h1>
      </div>
      <div className='sepp__footer-btn'>
        <p>Be among the first to gain privileged access today</p>
      </div>
      <div className='sepp__footer-links'>
        <div className='sepp__footer-links_logo'>
          <img src={seppFooter} alt='footerlogo' />
          <p>Pioneer Your Path to Success.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
