import React from 'react'
import './tutorlist.scss'
import { Profil } from './importtl.js'

const tutors = [
  { image: Profil, name: 'Dr U. Psalms', duration: '6 hours', cost: '99.90' },

  { image: 'Image45', name: 'Prof M. Edu', duration: '4 hours', cost: '99.80' },
]

const TutorList = () => {
  return (
    <div className='sepp__tutorlist'>
      <div className='sepp__tutorlist--header'>
        <h2>Tutors</h2>
        <select name='' id=''>
          <option value='English'>English</option>
          <option value='French'>French</option>
          <option value='Spanish'>Spanish</option>
        </select>
      </div>
      <div className='sepp__tutorlist-container'>
        {tutors.map((tutor) => (
          <div className='sepp__tutorlist--list'>
            <div className='sepp__tutorlist--tutor-detail'>
              <img src={tutor.image} alt={tutor.name} />
              <h2>{tutor.name}</h2>
            </div>
            <span>{tutor.duration}</span>
            <span>{tutor.cost}</span>
            <span className='sepp__tutorlist--tutor-todo'>:</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TutorList
