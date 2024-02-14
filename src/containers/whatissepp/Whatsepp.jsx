import React from 'react'
import './whatsepp.css'
import { Feature } from '../../components/feature/Feature'

const Whatsepp = () => {
  return (
    <div className='sepp__whatsepp section__margin' id='wsepp'>
      <div className='sepp__whatsepp-feature'>
        <Feature />
      </div>
      <div className='sepp__whatsepp-heading'>
        <h1 className='gradient-text'>
          Imagine what you can achieve. Doesn't that make you smile sometimes?
        </h1>
        <p>Explore the resources...</p>
      </div>
    </div>
  )
}

export default Whatsepp
