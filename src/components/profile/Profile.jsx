import React from 'react'
import './profile.scss'
import ProfileHeader from '../profileheader/ProfileHeader'
import { Profil } from './importp.js'

const Profile = () => {
  return (
    <div className='sepp__profile'>
      <ProfileHeader />
      <div className='sepp__profile-user--profile'>
        <div className='sepp__profile-user--detail'>
          <img src={Profil} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Profile
