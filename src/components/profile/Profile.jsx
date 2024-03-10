import React from 'react'
import './profile.scss'
import ProfileHeader from '../profileheader/ProfileHeader'
import { Profil } from './importp.js'
import { BiBook } from 'react-icons/bi'

const quizes = [
  { title: 'Quiz 1', duration: '1 Hour', icon: <BiBook /> },
  { title: 'Quiz 2', duration: '1 Hour', icon: <BiBook /> },
  { title: 'Quiz 3', duration: '1 Hour', icon: <BiBook /> },
  { title: 'Quiz 4', duration: '1 Hour', icon: <BiBook /> },
  { title: 'Quiz 5', duration: '1 Hour', icon: <BiBook /> },
  { title: 'Quiz 6', duration: '1 Hour', icon: <BiBook /> },
]

const Profile = () => {
  return (
    <div className='sepp__profile'>
      <ProfileHeader />
      <div className='sepp__profile-user--profile'>
        <div className='sepp__profile-user--detail'>
          <img src={Profil} alt='' />
          <h4 className='sepp__profile-username'>Sam Kall</h4>
          <span className='sepp__profile-category'>(Potential Hire)</span>
        </div>
        <div className='sepp__profile-quizes'>
          {quizes.map((quiz) => (
            <div className='sepp__profile-quiz__quiz'>
              <div className='sepp__profile-quiz--detail'>
                <div className='sepp__profile-quiz--icon'>{quiz.icon}</div>
                <div className='sepp__profile-quiz--name'>
                  <h5 className='sepp__profile-quiz--title'> {quiz.title}</h5>
                  <span className='sepp__profile-quiz--duration'>
                    {quiz.duration}
                  </span>
                </div>
              </div>
              <div className='sepp__profile-quiz--action'>|</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
