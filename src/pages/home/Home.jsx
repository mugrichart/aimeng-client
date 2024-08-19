

import React from 'react';
// import './Home.css';

// import Login from '../auth/login/Login';
import {Navigate } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token')
  
  return token ? 
    <Navigate to= "../work-space"/> :
    <div>login</div>
    // <Navigate to= "../login"/>
}

export default Home
