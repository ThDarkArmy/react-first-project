import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div className='containers'>
      <h3 className='title'>Header</h3>
      <div className='nav-group'>
        <button className='header-btn'>Home</button>
        <button className='header-btn'>Profile</button>
        <button className='header-btn'>Contact us</button>
        <button className='header-btn'>Services</button>
      </div>
      <button className='login-btn'>Login</button>
    </div>
  )
}

export default Header