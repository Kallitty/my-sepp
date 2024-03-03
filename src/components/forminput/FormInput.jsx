import React from 'react'
import './forminput.css'
import '../../containers/signup/signup.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span className='sepp__forminput_span'>{errorMessage}</span>
    </div>
  )
}

export default FormInput
