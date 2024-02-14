import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='sepp__features-container__feature'>
      <div className='sepp__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='sepp__feature-container_feature-text'>{text}</div>
    </div>
  )
}

export default Feature
