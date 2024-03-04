import React from 'react'
import './forminput.css'
import '../../containers/signup/signup.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props
  return (
    <div className='form-group items' style={{ height: '3.5rem' }}>
      <label htmlFor={inputProps.id} className=''>
        {label}
      </label>
      <input {...inputProps} onChange={onChange} className='myInput' />
      <span className='sepp__forminput_span'>{errorMessage}</span>
    </div>
  )
}

export default FormInput
