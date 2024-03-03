import React, { useContext } from 'react'
import { useState } from 'react'
import { Navbar } from '../../components'
import UserContext from '../login/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './signup.scss'
import Footer from '../footer/Footer'
import { useRef } from 'react'
import { FormInput } from '../../components'

// import { NavbarWithAuth } from '../../components'

function Signup() {
  const [values, setValues] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender: '',
  })
  const inputs = [
    {
      id: 1,
      label: 'Lastname',
      name: 'lastname',
      type: 'text',
      placeholder: 'Lastname',
      errorMessage:
        'Lastname should be 3-16 characters and should not include any special character.',
      required: true,
      // pattern: '^[A-Za-z0-9]{3,16}$', for username
      pattern: '^[A-Za-z]{3,16}$',
    },
    {
      id: 2,
      label: 'Firstname',
      name: 'firstname',
      type: 'text',
      placeholder: 'Firstname',
      errorMessage:
        'Firstname should be 3-16 characters and should not include any special character.',
      required: true,
      pattern: '^[A-Za-z]{3,16}$',
    },
    {
      id: 3,
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Email should be a valid email address',
      required: true,
    },
    {
      id: 4,
      label: 'Input Password',
      name: 'password',
      type: 'password',
      placeholder: 'Input Password',
      errorMessage:
        'Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character.',
      required: true,
      pattern:
        '^(?=.*[A-Za-z])(?=.*d)(?=.*[!@#$%^&*()_+{}[]:;<>,.?/~`-])[A-Za-zd!@#$%^&*()_+{}[]:;<>,.?/~`-]{8,20}$',
    },
    {
      id: 5,
      label: 'Confirm Password',
      name: 'confirmpassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Password does not match!',
      required: true,
    },
    {
      id: 6,
      label: 'Date of Birth',
      name: 'date',
      type: 'date',
      placeholder: 'Date of Birth',
      errorMessage: '',
    },
  ]
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  // const handleSignIn = () => {
  //   setIsUserSignedIn(true) // Set isUserSignedIn to true
  // }
  console.log(values)
  return (
    <>
      <Navbar />

      <div className='sepp__signup' id=''>
        <div className='sepp__signup-card'>
          <div className='row'>
            {/* bootstrap css class */}
            <div className='col-md-6'>
              <div className='sepp__signup-left_container'>
                <form
                  // onSubmit={handleSubmit}
                  // action=''
                  className='sepp__signup-form'
                >
                  <header>CREATE AN ACCOUNT</header>
                  {/* <small>
                    <p>
                      It takes
                      less than 3 minutes on an average to create an account.
                    </p>
                  </small> */}
                  <div className='form-group items'>
                    <i className='fas fa-envelope'></i>
                    {inputs.map((input) => (
                      <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    ))}
                  </div>
                  {/* <FormInput name='lastname' placeholder='Last Name*' />
                  <FormInput name='firstname' placeholder='First Name*' />
                  <FormInput name='email' placeholder='Email*' />
                  <FormInput name='password' placeholder='Input Password*' />
                  <FormInput
                    name='confirmpassword'
                    placeholder='Confirm Password*'
                  /> */}

                  <div className='form-group items'>
                    <i className='fas fa-lock'></i>
                    <select
                      className='myInput'
                      name='gender'
                      id='user_type'
                      // className='form-control ca-check-plan valid'
                    >
                      <option value=''>Gender*</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>
                      <small className='sepp__signup_small-text'>
                        By registering, you consent to our Terms of Service,
                        Privacy Policy, and Cookie Policy.
                      </small>
                    </label>
                  </div>
                  <br />

                  <input
                    type='submit'
                    className='button'
                    value='Register'
                    onSubmit={handleSubmit}
                  />

                  <div className='sepp__signup-login'>
                    Already registered? <br />
                    <button>
                      <Link to='/login'>Login here</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='sepp__signup-right_container'>
                <div className='sepp__signup-right_container-box'>
                  <header>Ready to Step Up?</header>
                  <p>
                    You're on the brink of transforming your career, and we're
                    thrilled to have you consider joining our community. Here at
                    SEPP, we affectionately call our members "Seppies" — a
                    vibrant group of ambitious individuals ready to take their
                    careers to new heights. <br />
                    Embrace the journey ahead with SEPP. Sign up today to start
                    leveraging the full spectrum of opportunities we've crafted
                    for your success. Your future is waiting, and we're here to
                    help you seize it with confidence.
                  </p>
                  <input type='button' value='Learn More' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup
