import React, { useContext } from 'react'
import { Navbar } from '../../components'
import UserContext from '../login/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './signup.scss'
import Footer from '../footer/Footer'

// import { NavbarWithAuth } from '../../components'

function Signup() {
  // const { isUserSignedIn, setIsUserSignedIn } = useContext(UserContext)

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

                  <div className='form-group'>
                    <label>
                      <input
                        id='check_1'
                        name='check_1'
                        type='checkbox'
                        required
                      />
                      <small> Remember me</small>
                      <div className='invalid-feedback'>
                        You must check the box.
                      </div>
                    </label>
                  </div>

                  <input
                    type='submit'
                    className='button'
                    value='Register'
                    onSubmit={handleSignIn}
                  />
                  <div>
                    <a
                      href='#'
                      id='forget-password'
                      style={{ textDecoration: 'underline' }}
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div className='sepp__signup-login'>
                    <button>
                      <Link to='/signup'>Login here</Link>
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

// import React from 'react'
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// // import { Button, Navbar, Nav, Container } from 'react-bootstrap'
// // import Login from './Login.jsx'

// function SignUp() {
//   return (
//     <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
//       <div className='form-container p-5 rounded bg-white'>
//         <form>
//           <h3 className='text-center'>Sign Up</h3>
//           <div className='mb-2'>
//             <label htmlFor='fname'>First Name</label>
//             <input
//               type='text'
//               placeholder='Enter First Name'
//               className='form-control'
//             />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='lname'>Last Name</label>
//             <input
//               type='text'
//               placeholder='Enter Last Name'
//               className='form-control'
//             />
//           </div>
//           <div className='mb-2'>
//             <label htmlFor='password'>Password</label>
//             <input
//               type='password'
//               placeholder='Enter Password'
//               className='form-control'
//             />
//           </div>

//           <div className='d-grid mt-2'>
//             <Link to='/'>
//               <button className='btn btn-primary'>Sign Up</button>
//             </Link>
//           </div>
//           <p className='text-end mt-2'>
//             Already Registered{' '}
//             <Link to='/login' className='ms-2'>
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp
