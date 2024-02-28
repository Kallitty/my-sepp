import React, { useContext } from 'react'
import { Navbar } from '../../components'
import UserContext from '../login/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './signup.scss'
import Footer from '../footer/Footer'

//
function Signup() {
  // const { isUserSignedIn, setIsUserSignedIn } = useContext(UserContext)

  const handleSignUp = () => {
    setIsUserSignedUp(true) // Set isUserSignedIn to true
  }

  return (
    <>
      <Navbar />
      <div className='container' id=''>
        <div className='myCard'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='myLeftCtn'>
                <form className='myForm text-center'>
                  <header>Create new account</header>
                  <div className='form-group items'>
                    <i className='fas fa-user'></i>
                    <input
                      className='myInput'
                      type='text'
                      placeholder='Username'
                      id='username'
                      required
                    />
                  </div>

                  <div className='form-group items'>
                    <i className='fas fa-envelope'></i>
                    <input
                      className='myInput'
                      placeholder='Email'
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
                      placeholder='Password'
                      required
                    />
                  </div>

                  <div className='form-group'>
                    <label>
                      <input
                        id='check_1'
                        name='check_1'
                        type='checkbox'
                        required
                      />
                      <small> I read and agree to Terms & Conditions</small>
                      <div className='invalid-feedback'>
                        You must check the box.
                      </div>
                    </label>
                  </div>

                  <input
                    type='submit'
                    className='butt'
                    value='Sign Up'
                    onSubmit={handleSignIn}
                  />
                  <Link to='/signup'>SignUp/Login</Link>
                </form>
                <button onClick={handleSignIn}>Login Boss</button>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='myRightCtn'>
                <div className='box'>
                  <header>Hi Seppie!</header>
                  <p>
                    That's what we call you. Are you ready to take the next step
                    in your career? Look no further than SEPP; a comprehensive
                    online resource dedicated to preparing candidates for
                    successful employment. <br />
                    At SEPP, we understand the challenges and complexities of
                    today's job market. That's why we've curated a wide range of
                    tools, resources, and expert guidance to help you navigate
                    every stage of the job search process with confidence and
                    competence.
                  </p>
                  <input
                    type='button'
                    className='butt_out'
                    value='Learn More'
                  />
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
