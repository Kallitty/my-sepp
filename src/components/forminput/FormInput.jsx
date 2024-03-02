import React from 'react'
import '../../containers/signup/signup.scss'

const FormInput = () => {
  return (
    <div className='form-group items'>
      <i className='fas fa-envelope'></i>
      <input
        className='myInput'
        type='text'
        id='Lastname'
        // placeholder={}
        // required
      />
    </div>
  )
}

export default FormInput
