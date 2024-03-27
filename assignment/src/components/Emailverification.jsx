import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios library
import './Sign_in.css';

function EmailVerification() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [expirationMessage, setExpirationMessage] = useState('');

  useEffect(() => {
    let intervalId;
    if (isCodeSent) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isCodeSent]);

  useEffect(() => {
    if (timer === 0) {
      setIsCodeSent(false);
      setExpirationMessage('Verification code expired. Please resend.');
      setTimer(60); // Reset timer to initial value
    }
  }, [timer]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSendCode = async () => {
    try {
      // Make a POST request to the backend endpoint
      await axios.post('http://localhost:8000/send-verification-code', { email });
      setIsCodeSent(true);
      setExpirationMessage('');
    } catch (error) {
      console.error('Error sending verification code:', error);
      // Handle error (e.g., display error message to the user)
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:8000/verify-code', { email, verificationCode });
      setIsVerified(true);
      window.location.href = '/';
    } catch (error) {
      console.error('Error verifying code:', error);
      if (error.response && error.response.status === 400 || error.response.data.error === 'InvalidVerificationCode') {
        setExpirationMessage('Verification code is invalid. Please try again.');
      } 
    }
  };

  return (
    

    <div style={{backgroundImage: "url('img/email_back.jpg')",height:'700px',backgroundRepeat: 'no-repeat',backgroundSize:'cover',paddingTop:'200px'}}>
      <h2 style={{color:'black',fontWeight:'800'}}>Email Verification</h2>
      <label style={{color:'black',fontWeight:'bold'}}>Email     :  </label>
      
      <input type="email" value={email} onChange={handleEmailChange} />
      {!isCodeSent && (
        <button style={{width:'190px'}}  onClick={handleSendCode}>Send Verification Code</button>
      )}
      {isCodeSent && (
        <div>
          <label>Verification Code:</label>
          <input
            type="text"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
          />
          <button onClick={handleVerify}>Verify</button>
          <p>Time remaining: {timer} seconds</p>
          {expirationMessage && <p>{expirationMessage}</p>}
        </div>
      )}
      {isVerified && <p>Email verified successfully!</p>}
      <br></br><br></br>
      <p style={{color:'red',animation:'blink 3.7s infinite'}}>Note: ***Please Verify your email atleast once,to be an authenticate user.***</p>

    </div>
  );
}

export default EmailVerification;
