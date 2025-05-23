// import React from 'react';
// import './login.css';
// import { RiLoginCircleLine } from "react-icons/ri";

// function Login() {
//   return (
//     <div className="dropdown-form">  
//   <div className="loginCircle">
//   <div><h3 className="loginBtc">LOGIN</h3></div>
//   <div><RiLoginCircleLine /></div>
// </div>

  
//       <input type="email" placeholder="Email" />
//       <input type="password" placeholder="Password" />
//       <button className="submitBtn">Login</button>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import './login.css';
import {  RiCloseLine } from "react-icons/ri";

function Login({ onClose }) {
  return (
    <div className="dropdown-form">
      {/* Close Icon */}
      <RiCloseLine className="close-icon" onClick={onClose} />

      <div className="loginCircle">
        <h3 className="loginBtc">LOGIN</h3>
       
      </div>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="submitBtn">Login</button>
    </div>
  );
}

export default Login;

