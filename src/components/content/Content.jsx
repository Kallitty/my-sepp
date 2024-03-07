import React from 'react'
import './content.scss'
import ContentHeader from '../contentheader/ContentHeader'
import Card from '../card/Card'

const Content = () => {
  return (
    <div className='sepp__content'>
      <ContentHeader />
      <Card />
    </div>
  )
}

export default Content
