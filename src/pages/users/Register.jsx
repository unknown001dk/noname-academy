import React from 'react';
import { PageTitle } from '../../components/PageTitle';

function Register() {
  return (
    <>
    <PageTitle title='Register page' />
    <section>
    <div className="form-box">
      <div className="form-value">
        <form action="">
          <h2 className='mb-3'>Register</h2>
          <div className='form-inputs'>
            <input className='mb-3' type="text" id="username" name="username" placeholder='Enter username..' required />
          </div>
          <div className='form-inputs'>
            <input className='mb-3' type="email" id="email" name="email" placeholder='Enter your email' required />
          </div>
          <div className='form-inputs'>
            <input className='mb-3' type="password" id="password" placeholder='Enter your password' name="password" required />
          </div>
          <div className='form-btn'>
            <button>Register</button>
          </div>
          <div className='form-links mb-1'>
            <a href="./login">Already have an Account</a>
          </div>
        </form>
      </div>
    </div>
  </section>
    </>
  )
}

export default Register