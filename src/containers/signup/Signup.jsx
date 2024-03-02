import React, { useContext } from 'react'
import { Navbar } from '../../components'
import UserContext from '../login/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './signup.scss'
import Footer from '../footer/Footer'
import { useRef } from 'react'

// import { NavbarWithAuth } from '../../components'
const usernameRef = useRef()
const handleSubmit = (e) => {
  e.preventDefault()
}

function Signup() {
  const handleSignIn = () => {
    setIsUserSignedIn(true) // Set isUserSignedIn to true
  }

  return (
    <>
      <Navbar />
      <div className='sepp__signup' id=''>
        <div className='sepp__signup-card'>
          <div className='row'>
            {/* bootstrap css class */}
            <div className='col-md-6'>
              <div className='sepp__signup-left_container'>
                <form className='sepp__signup-form'>
                  <header>CREATE AN ACCOUNT</header>
                  {/* <small>
                    <p>
                      Don't have an account yet? Create your account. It's take
                      less than 5 minutes on average.
                    </p>
                  </small> */}
                  <div className='form-group items'>
                    <i className='fas fa-envelope'></i>
                    <input
                      className='myInput'
                      placeholder='Last Name*'
                      type='text'
                      id='Lastname'
                      required
                    />
                  </div>
                  <div className='form-group items'>
                    <i className='fas fa-envelope'></i>
                    <input
                      className='myInput'
                      placeholder='First Name*'
                      type='text'
                      id='Firstname'
                      required
                    />
                  </div>
                  <div className='form-group items'>
                    <i className='fas fa-envelope'></i>
                    <input
                      className='myInput'
                      placeholder='Middle Name'
                      type='text'
                      id='Middlename'
                    />
                  </div>

                  <div className='form-group items'>
                    <i className='fas fa-envelope'></i>
                    <input
                      className='myInput'
                      placeholder='Email*'
                      type='text'
                      id='email'
                      required
                    />
                  </div>

                  <div className='form-group items'>
                    <i className='fas fa-lock'></i>
                    <input
                      className='myInput'
                      type='password'
                      id='password'
                      placeholder='Input Password*'
                      required
                    />
                  </div>
                  <div className='form-group items'>
                    <i className='fas fa-lock'></i>
                    <input
                      className='myInput'
                      type='password'
                      id='password'
                      placeholder=' Confirm Password*'
                      required
                    />
                  </div>
                  <div className='form-group items'>
                    <i className='fas fa-lock'></i>
                    <select
                      className='myInput'
                      name='role'
                      id='user_type'
                      // className='form-control ca-check-plan valid'
                      required
                    >
                      <option value=''>Gender*</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>
                      <small class='sepp__signup_small-text'>
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
                    onSubmit={handleSignIn}
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
