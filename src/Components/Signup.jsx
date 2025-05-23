import React from 'react';
import './login.css';
import {  RiCloseLine } from "react-icons/ri";
function Signup({ onCloseUp }) {
  return (
    <div className="dropdown-form">
         <RiCloseLine className="close-icon" onClick={onCloseUp} />
      <h3>Sign Up</h3>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="submitBtn">Register</button>
    </div>
  );
}

export default Signup;
