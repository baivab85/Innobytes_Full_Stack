import React, { useState, useEffect } from 'react';
import './Sign_in.css'; // Import your CSS file
import { loginUser, logoutUser } from '../service/api';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State to manage "Remember Me" checkbox
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load remembered username from local storage when component mounts
  useEffect(() => {
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      setUsername(rememberedUsername);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ uname: username, adate: password });
      if (response.status === 200) {
        setError('');
        setIsLoggedIn(true);

        // Remember username if "Remember Me" is checked
        if (rememberMe) {
          localStorage.setItem('rememberedUsername', username);
        } else {
          localStorage.removeItem('rememberedUsername');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogout = async () => {
    localStorage.clear();
    setIsLoggedIn(false); // Update the isLoggedIn state without reloading the page
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    }
  };
  if (isLoggedIn) {
    return (
      <div>
        
       
        <Menu username={username} handleLogout={handleLogout}/> 
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="login-box">
        <form>
          <h2>Login</h2>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="text"
             
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{' '}
              Remember me
            </label>
            <a href="/email_verification" style={{animation:'blink 0.5s infinite',color:'red',fontSize:'20px',textDecoration:'none'}}>Verify Email</a>
          </div>

          <button type="button" className="login-button" onClick={handleLogin}>
            Login
          </button>
          {error && <div>{error}</div>}
          <div className="register-link">
            <p>
              Don't have an account? <NavLink to="/register">Register</NavLink>
              
            </p>
           
          </div>
          
        </form>


      </div>
      
    </div>
   
  );
};

export default LoginPage;
