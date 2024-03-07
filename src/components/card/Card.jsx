import React from 'react'
import { FaBook, FaVideo, FaFileAlt } from 'react-icons/fa'
import './card.scss'

const course = [
  { id: 1, title: 'Study Ebook', icon: <FaBook /> },
  { id: 2, title: 'Study Videos', icon: <FaVideo /> },
  { id: 3, title: 'Others', icon: <FaFileAlt /> },
]

const Card = () => {
  return (
    <div className='sepp__card-container'>
      {course.map((item) => (
        <div className='sepp__card'>
          <div className='sepp__card--cover'>{item.icon}</div>
          <div className='sepp__card--title'>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Card
