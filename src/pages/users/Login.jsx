import React from 'react';
import './css/Login.css';

function Login() {
  return (
    <section>
    <div className="form-box">
      <div className="form-value">
        <form action="">
          <h2 className='mb-3'>Login</h2>
          <div className='form-inputs'>
            <input className='mb-3' type="text" id="username" name="username" placeholder='Enter username..' required />
          </div>
          <div className='form-inputs'>
            <input className='mb-3' type="password" id="password" placeholder='Enter your password' name="password" required />
          </div>
          <div className='form-btn'>
            <button>Login</button>
          </div>
          <div className='form-links mb-1'>
            <a href="/forgot-password">Forgot Password?</a>
            <a href="./register">Create an Account</a>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Login