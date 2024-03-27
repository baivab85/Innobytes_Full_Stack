import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Homepage';
import LoginPage from './components/Sign_in';
import Form1 from './components/User_Registration';
import EmailVerification from './components/Emailverification';
import Menu from './components/Menu'
import Clock from './components/Construction';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={< LandingPage/>}></Route>
        <Route exact path='/gets_started' element={< LoginPage/>}></Route>
        <Route exact path='/register' element={< Form1/>}></Route>
        <Route exact path='/email_verification' element={< EmailVerification/>}></Route>
        <Route exact path = '/dashboard' element={<Menu/>}></Route>
        <Route exact path='/under_construction' element={< Clock/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
