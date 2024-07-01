// LoginRegister.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import "./LoginRegister.css";

const LoginRegister = ({onLogin}) => {
  const [action, setAction] = useState('');
  const navigate = useNavigate();

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you should add your login logic (authentication)
    // For now, we navigate to the dashboard directly.
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="username" required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder="email" required />
            <MdEmail className='icon' />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Username?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="username" required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder="firstname" required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder="lastname" required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="text" placeholder="email" required />
            <MdEmail className='icon' />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
